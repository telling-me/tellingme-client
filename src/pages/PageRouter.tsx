import React from 'react'
import { Route, Routes } from 'react-router-dom'

// element
import * as Swtich from 'pages'

// layout
import * as Layout from 'components/layout'

import { PAGE_URL } from 'configs/path'

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout.CommonLayout />}></Route>
        <Route path={PAGE_URL.Login} element={<Layout.LoginLayout />}>
          <Route index element={<Swtich.LoginPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default PageRouter
