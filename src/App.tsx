import React from 'react'
import 'styles/global.css'

// react-query
import { ReactQueryDevtools } from 'react-query/devtools'

// router
import { PageRouter, RouteChangeTracker } from './pages'

// vercel web analytics
import { Analytics } from '@vercel/analytics/react'

function App() {
  // google analytics 4
  RouteChangeTracker()

  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })

  return (
    <>
      <PageRouter />
      <ReactQueryDevtools initialIsOpen={false} />
      <Analytics />
    </>
  )
}

export default App
