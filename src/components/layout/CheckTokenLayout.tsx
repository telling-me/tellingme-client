import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { requestPermission } from 'firebase-messaging-sw'

// hooks
import { useUpdateUserPushToken } from 'hooks/mutations/user'
import { useGetUserNotiQuery, useGetUserPushToken } from 'hooks/queries/userInfo'

const CheckTokenLayout = () => {
  const [clientPushToken, setClientPushToken] = useState<string | undefined>()

  const resNoti = useGetUserNotiQuery().data?.data.allowNotification
  const serverPT = useGetUserPushToken().data?.data.pushToken
  const { mutate: updateUserPushToken } = useUpdateUserPushToken()

  const navigate = useNavigate()

  useEffect(() => {
    if (typeof clientPushToken === 'undefined') {
      requestPermission(setClientPushToken)
    }

    if (resNoti != null && clientPushToken != null && serverPT != null) {
      if (resNoti === true && clientPushToken !== 'denied' && clientPushToken !== `${serverPT as string}test`) {
        updateUserPushToken({ pushToken: clientPushToken })
      }

      navigate('/app/main')
    }
  }, [serverPT, resNoti])

  return <></>
}

export default CheckTokenLayout
