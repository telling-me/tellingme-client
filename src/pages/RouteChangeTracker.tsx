import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// google analytics 4
import ReactGA from 'react-ga4'

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
const RouteChangeTracker = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  // http 접속 & vercel 배포시에는 트래킹 하지 않음
  useEffect(() => {
    if (!(window.location.href.split(':')[0] === 'http') && !window.location.href.includes('vercel.app')) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID as string)
      setInitialized(true)
    }
  }, [])

  // location 변경 감지시 pageview 이벤트 전송
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname })
      ReactGA.send('pageview')
    }
  }, [initialized, location])

  // // 개발용
  // useEffect(() => {
  //   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID as string)
  //   ReactGA.set({ page: location.pathname })
  //   ReactGA.send('pageview')
  // }, [location])
}

export default RouteChangeTracker
