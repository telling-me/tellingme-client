import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// element
import * as Switch from 'pages'

// layout
import CommonLayout from 'components/layout/CommonLayout'
import LandingLayout from 'components/layout/LandingLayout'
import KakaoLayout from 'components/layout/KakaoLayout'
import AppleLayout from 'components/layout/AppleLayout'
import NewsLetterLayout from 'components/layout/NewsLetterLayout'
import SignUpLayout from 'components/layout/SignUpLayout'
import CheckTokenLayout from 'components/layout/CheckTokenLayout'

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
            <Route path={PAGE_URL.Login_Apple} element={<Switch.AppleLoginButtonPage />} />
            <Route path={PAGE_URL.Login} element={<Switch.LoginButtonPage />} />
            <Route path={PAGE_URL.SignUp} element={<Switch.SignUpPage />} />
            <Route path={'*'} element={<Switch.Error404Page />} />
          </Route>
          {
            // 임시 로그인 라우터
          }
          <Route path={PAGE_URL.Kakao} element={<KakaoLayout />} />
          <Route path={PAGE_URL.Apple} element={<AppleLayout />} />
          <Route path={PAGE_URL.CheckToken} element={<CheckTokenLayout />} />
          {
            // 앱
          }
          <Route path={PAGE_URL.App} element={<CommonLayout />}>
            <Route index path={PAGE_URL.Main} element={<Switch.MainPage />} />
            <Route path={PAGE_URL.AllAnswer} element={<Switch.AllAnswerPage />} />
            <Route path={PAGE_URL.MyAnswer} element={<Switch.MyAnswerPage />} />{' '}
            <Route path={PAGE_URL.Setting} element={<Switch.SettingPage />} />
            <Route path={PAGE_URL.Error500} element={<Switch.Error500Page />} />
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
          </Route>
          <Route path={'*'} element={<Switch.Error404Page />} />
          {
            // 회원 가입
          }
          <Route path={PAGE_URL.SignUp} element={<SignUpLayout />}>
            <Route index element={<Switch.SignUpPage />} />
            <Route path={PAGE_URL.SignUpComplete} element={<Switch.SignUpCompletePage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageRouter
