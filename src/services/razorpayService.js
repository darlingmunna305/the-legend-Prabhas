// Razorpay Payment Service

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID

export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export const createOrder = async (amount, plan) => {
  try {
    const response = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `prabhas_${Date.now()}`,
        notes: {
          plan_type: plan,
          subscription_date: new Date().toISOString(),
        },
      }),
    })

    const data = await response.json()
    if (data.success) {
      return data
    } else {
      throw new Error('Failed to create order')
    }
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

export const handleRazorpayPayment = async (orderData, userEmail, userName, userId, plan) => {
  const scriptLoaded = await loadRazorpayScript()
  if (!scriptLoaded) {
    alert('Failed to load Razorpay. Please try again.')
    return false
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: orderData.amount,
    currency: orderData.currency,
    name: 'The Legend Prabhas',
    description: 'Premium Subscription',
    image: '/logo.png',
    order_id: orderData.orderId,
    handler: async function (response) {
      try {
        // Verify payment on backend
        const verifyResponse = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userId: userId,
            planType: plan
          }),
        })

        const verifyData = await verifyResponse.json()
        if (verifyData.success) {
          // Store subscription info in localStorage as backup
          const subscriptionData = {
            isPremium: true,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            subscriptionDate: new Date().toISOString(),
            email: userEmail,
            name: userName,
          }
          localStorage.setItem('subscription', JSON.stringify(subscriptionData))
          return true
        } else {
          alert('Payment verification failed')
          return false
        }
      } catch (error) {
        console.error('Payment verification error:', error)
        return false
      }
    },
    prefill: {
      email: userEmail,
      contact: '9999999999',
    },
    theme: {
      color: '#d4af37', // Gold theme
    },
  }

  const rzp1 = new window.Razorpay(options)
  rzp1.open()
}

export const isUserPremium = () => {
  try {
    const subscription = localStorage.getItem('subscription')
    if (!subscription) return false
    const data = JSON.parse(subscription)
    return data.isPremium === true
  } catch {
    return false
  }
}

export const getUserSubscription = () => {
  try {
    const subscription = localStorage.getItem('subscription')
    return subscription ? JSON.parse(subscription) : null
  } catch {
    return null
  }
}
