import React from 'react'
import 'styles/global.css'

// react-query
import { ReactQueryDevtools } from 'react-query/devtools'

// router
import { PageRouter } from './pages'

function App() {
  return (
    <>
      <PageRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
