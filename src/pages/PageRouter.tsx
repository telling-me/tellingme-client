import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// element
import * as Switch from 'pages'

// layout
import CommonLayout from 'components/layout/CommonLayout'
import LandingLayout from 'components/layout/LandingLayout'
import KakaoLayout from 'components/layout/KakaoLayout'
import AppleLayout from 'components/layout/AppleLayout'
import NewsLetterLayout from 'components/layout/NewsLetterLayout'
import SignUpLayout from 'components/layout/SignUpLayout'
import CheckPushTokenLayout from 'components/layout/CheckPushTokenLayout'

// configs
import { PAGE_URL } from 'configs/path'

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
            <Route path={PAGE_URL.Admin} element={<Switch.AdminPage />} />
            <Route path={PAGE_URL.AdminReport} element={<Switch.AdminReportPage />} />
            <Route path={'*'} element={<Switch.Error404Page />} />
          </Route>
          {
            // 임시 로그인 라우터
          }
          <Route path={PAGE_URL.Kakao} element={<KakaoLayout />} />
          <Route path={PAGE_URL.Apple} element={<AppleLayout />} />
          <Route path={PAGE_URL.CheckPushToken} element={<CheckPushTokenLayout />} />
          {
            // 앱
          }
          <Route path={PAGE_URL.App} element={<CommonLayout />}>
            <Route index path={PAGE_URL.Main} element={<Switch.MainPage />} />
            <Route path={PAGE_URL.AllAnswer} element={<Switch.AllAnswerPage />} />
            <Route path={PAGE_URL.MyAnswer} element={<Switch.MyAnswerPage />} />
            <Route path={PAGE_URL.Setting} element={<Switch.SettingPage />} />
            <Route path={PAGE_URL.Error500} element={<Switch.Error500Page />} />
            <Route path={PAGE_URL.Error403} element={<Switch.Error403Page />} />
            <Route path={PAGE_URL.Dev} element={<Switch.DevPage />} />
            <Route path={'*'} element={<Switch.Error404Page />} />
          </Route>
          {
            // 뉴스 레터
          }
          <Route path={PAGE_URL.NewsLetter} element={<NewsLetterLayout />}>
            <Route index element={<Switch.NewsLetterPage />} />
            <Route path={PAGE_URL.NewsLetterComplete} element={<Switch.NewsLetterCompletePage />} />
            <Route path={PAGE_URL.NewsLetterUnsubscribe} element={<Switch.NewsLetterUnsubscribePage />} />
            <Route
              path={PAGE_URL.NewsLetterUnsubscribeComplete}
              element={<Switch.NewsLetterUnsubscribeCompletePage />}
            />
            <Route path={'*'} element={<Switch.Error404Page />} />
          </Route>
          {
            // 회원 가입
          }
          <Route path={PAGE_URL.SignUp} element={<SignUpLayout />}>
            <Route index element={<Switch.SignUpPage />} />
            <Route path={PAGE_URL.SignUpComplete} element={<Switch.SignUpCompletePage />} />
            <Route path={'*'} element={<Switch.Error404Page />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageRouter
