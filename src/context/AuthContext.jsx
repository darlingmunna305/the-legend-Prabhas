import React, { createContext, useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check active sessions and sets the user
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (session) {
        setUser(session.user)
        setIsAuthenticated(true)
        // Fetch additional profile data (like subscription) if needed
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
        
        if (profile) {
          setUser({ ...session.user, ...profile })
        }
      }
      setLoading(false)
    }

    checkUser()

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        setUser(session.user)
        setIsAuthenticated(true)
        
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
          
        if (profile) {
          setUser({ ...session.user, ...profile })
        }
      } else {
        setUser(null)
        setIsAuthenticated(false)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email, password) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      return { success: true }
    } catch (error) {
      console.error('Login error:', error.message)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (email, password, name) => {
    try {
      setLoading(true)
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          }
        }
      })
      if (error) throw error
      
      // Create a profile record in the profiles table
      if (data.user) {
        await supabase.from('profiles').insert([
          { 
            id: data.user.id, 
            full_name: name, 
            subscription: 'free',
            isPremium: false 
          }
        ])
      }
      
      return { success: true }
    } catch (error) {
      console.error('Signup error:', error.message)
      return { success: false, error: error.message }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setIsAuthenticated(false)
  }

  const upgradeToPremium = async (planType, paymentId) => {
    if (user) {
      const expiryDate = new Date()
      expiryDate.setMonth(expiryDate.getMonth() + 1)
      
      const { error } = await supabase
        .from('profiles')
        .update({
          subscription: planType,
          isPremium: true,
          expiry_date: expiryDate.toISOString(),
          last_payment_id: paymentId
        })
        .eq('id', user.id)

      if (error) {
        console.error('Upgrade error:', error.message)
        return false
      }

      // Update local state
      setUser({
        ...user,
        subscription: planType,
        isPremium: true,
        expiry_date: expiryDate.toISOString()
      })
      return true
    }
    return false
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    signup,
    logout,
    upgradeToPremium
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
