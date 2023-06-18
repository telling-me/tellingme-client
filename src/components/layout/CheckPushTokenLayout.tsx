import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestPermission } from 'firebase-messaging-sw'

// hooks
import { useGetUserNotiQuery, useGetUserPushToken } from 'hooks/queries/userInfo'
import { useUpdateUserPushToken } from 'hooks/mutations/user'

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

  return <></>
}

export default CheckPushTokenLayout
