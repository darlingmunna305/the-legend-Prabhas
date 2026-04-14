import { useEffect } from 'react'

const GoogleAnalytics = ({ trackingId }) => {
  useEffect(() => {
    // Load Google Analytics script
    if (!trackingId) return

    // Create script tag
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_path: window.location.pathname,
        anonymize_ip: true,
      });
    `

    document.head.appendChild(script1)
    document.head.appendChild(script2)

    // Track page views
    const handleRouteChange = () => {
      window.gtag?.('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
      })
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [trackingId])

  return null
}

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

// Track page view
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    })
  }
}

// Track user properties
export const setUserProperties = (userId, properties = {}) => {
  if (window.gtag) {
    window.gtag('config', {
      'user_id': userId,
      ...properties,
    })
  }
}

// Track video interaction
export const trackVideoEvent = (videoTitle, videoAction) => {
  if (window.gtag) {
    window.gtag('event', 'video_event', {
      video_title: videoTitle,
      video_action: videoAction, // play, pause, complete, etc.
    })
  }
}

// Track purchase/subscription
export const trackPurchase = (amount, currency, items = []) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      currency: currency,
      value: amount,
      items: items,
    })
  }
}

// Track search
export const trackSearch = (searchTerm, resultCount) => {
  if (window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      result_count: resultCount,
    })
  }
}

// Track review submission
export const trackReviewSubmission = (rating, hasText) => {
  if (window.gtag) {
    window.gtag('event', 'rate', {
      rating: rating,
      has_text: hasText,
    })
  }
}

export default GoogleAnalytics
