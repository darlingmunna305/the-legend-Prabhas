import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('prabhasUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // For demo purposes - simple validation
    if (email && password) {
      const newUser = {
        id: Date.now(),
        email,
        name: email.split('@')[0],
        subscription: 'free',
        joinDate: new Date().toISOString(),
        isPremium: false,
        expiryDate: null
      }
      setUser(newUser)
      setIsAuthenticated(true)
      localStorage.setItem('prabhasUser', JSON.stringify(newUser))
      return true
    }
    return false
  }

  const signup = (email, password, name) => {
    // For demo purposes
    if (email && password && name) {
      const newUser = {
        id: Date.now(),
        email,
        name,
        subscription: 'free',
        joinDate: new Date().toISOString(),
        isPremium: false,
        expiryDate: null
      }
      setUser(newUser)
      setIsAuthenticated(true)
      localStorage.setItem('prabhasUser', JSON.stringify(newUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('prabhasUser')
  }

  const upgradeToPremium = (planType, paymentId) => {
    if (user) {
      const expiryDate = new Date()
      expiryDate.setMonth(expiryDate.getMonth() + 1)
      
      const updatedUser = {
        ...user,
        subscription: planType,
        isPremium: true,
        expiryDate: expiryDate.toISOString(),
        paymentId
      }
      setUser(updatedUser)
      localStorage.setItem('prabhasUser', JSON.stringify(updatedUser))
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
