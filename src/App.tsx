import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
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
