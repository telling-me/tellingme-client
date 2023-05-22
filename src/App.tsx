import React from 'react'
import 'styles/global.css'

// react-query
import { ReactQueryDevtools } from 'react-query/devtools'

// router
import { PageRouter } from './pages'

// vercel web analytics
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <PageRouter />
      <ReactQueryDevtools initialIsOpen={false} />
      <Analytics />
    </>
  )
}

export default App
