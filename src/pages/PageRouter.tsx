import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

// element
import * as Swtich from 'pages'

// layout
import CommonLayout from 'components/layout/CommonLayout'
import LandingLayout from 'components/layout/LandingLayout'

// path
import { PAGE_URL } from 'configs/path'
import { AnimatePresence } from 'framer-motion'

const PageRouter = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={PAGE_URL.Home} element={<LandingLayout />}>
            <Route index element={<Swtich.LandingPage />} />
          </Route>
          <Route path={PAGE_URL.App} element={<CommonLayout />}>
            <Route index element={<Swtich.MainPage />} />
            <Route index path={PAGE_URL.Main} element={<Swtich.MainPage />} />
            <Route
              path={PAGE_URL.AllAnswer}
              element={<Swtich.AllAnswerPage />}
            />
            <Route path={PAGE_URL.MyAnswer} element={<Swtich.MyAnswerPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default PageRouter
