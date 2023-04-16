import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// element
import * as Swtich from 'pages'

// layout
import CommonLayout from 'components/layout/CommonLayout'
import LandingLayout from 'components/layout/LandingLayout'
import KakaoLayout from 'components/layout/KakaoLayout'
import AppleLayout from 'components/layout/AppleLayout'

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
            <Route index element={<Swtich.LandingPage />} />
            <Route path={PAGE_URL.Login} element={<Swtich.LoginButtonPage />} />
            <Route path={PAGE_URL.Login_Apple} element={<Swtich.AppleLoginButtonPage />} />
          </Route>
          {
            // 임시 로그인 라우터
          }
          <Route path={PAGE_URL.Kakao} element={<KakaoLayout />} />
          <Route path={PAGE_URL.Apple} element={<AppleLayout />} />
          {
            // 앱
          }
          <Route path={PAGE_URL.App} element={<CommonLayout />}>
            <Route index element={<Swtich.MainPage />} />
            <Route index path={PAGE_URL.Main} element={<Swtich.MainPage />} />
            <Route path={PAGE_URL.AllAnswer} element={<Swtich.AllAnswerPage />} />
            <Route path={PAGE_URL.MyAnswer} element={<Swtich.MyAnswerPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageRouter
