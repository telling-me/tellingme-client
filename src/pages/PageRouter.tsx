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
        <Route path={PAGE_URL.Home} element={<Layout.CommonLayout />}>
          <Route index element={<Swtich.LandingPage />} />
        </Route>
        <Route path={PAGE_URL.Login} element={<Layout.LoginLayout />}>
          <Route index element={<Swtich.LoginPage />} />
        </Route>
        <Route path={PAGE_URL.Kakao} element={<Layout.KakaoLayout />} />
      </Routes>
    </>
  )
}

export default PageRouter
