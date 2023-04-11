import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// element
import * as Switch from 'pages'

// layout
import CommonLayout from 'components/layout/CommonLayout'
import LandingLayout from 'components/layout/LandingLayout'
import KakaoLayout from 'components/layout/KakaoLayout'

// path
import { PAGE_URL } from 'configs/path'
import { AnimatePresence } from 'framer-motion'

const PageRouter = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {
            // 랜딩페이지
          }
          <Route path={PAGE_URL.Home} element={<LandingLayout />}>
            <Route index element={<Switch.LandingPage />} />
            <Route path={PAGE_URL.Login} element={<Switch.LoginButtonPage />} />
            <Route path={PAGE_URL.SignUp} element={<Switch.SignUpPage />} />
          </Route>
          {
            // 임시 로그인 라우터
          }
          <Route path={PAGE_URL.Kakao} element={<KakaoLayout />} />
          {
            // 앱
          }
          <Route path={PAGE_URL.App} element={<CommonLayout />}>
            <Route index element={<Switch.MainPage />} />
            <Route index path={PAGE_URL.Main} element={<Switch.MainPage />} />
            <Route path={PAGE_URL.AllAnswer} element={<Switch.AllAnswerPage />} />
            <Route path={PAGE_URL.MyAnswer} element={<Switch.MyAnswerPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageRouter
