import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestPermission } from 'firebase-messaging-sw'

// hooks
import { useUpdateUserPushToken, useGetUserNotiQuery, useGetUserPushToken } from 'hooks'

// components
import { Loading } from 'components'

// styles
import style from 'styles/styled-components/styled'

const CheckPushTokenLayout = () => {
  const [nowToken, setNowToken] = useState<string | undefined>()

  const serverToken = useGetUserPushToken().data?.data.pushToken as string
  const allowNotification = useGetUserNotiQuery().data?.data.allowNotification as boolean
  const { mutate: updateUserPushToken } = useUpdateUserPushToken()

  const navigate = useNavigate()

  useEffect(() => {
    requestPermission(setNowToken)
  }, [])

  useEffect(() => {
    if (allowNotification != null && !allowNotification) {
      console.log('백엔드 알림 허용 거부')
      navigate('/app/main')
    } else if (nowToken != null && nowToken === 'denied') {
      console.log('브라우저 알림 허용 거부')
      navigate('/app/main')
    } else if (serverToken === nowToken) {
      console.log('토큰 일치')
      navigate('/app/main')
    } else if (nowToken != null) {
      updateUserPushToken({ pushToken: nowToken })
      navigate('/app/main')
    }
  }, [serverToken, allowNotification])

  return (
    <Grid _width="100%" _height="100vh" flex="center">
      <Loading />
    </Grid>
  )
}

const { Grid } = style

export default CheckPushTokenLayout
