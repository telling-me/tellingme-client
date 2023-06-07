import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// hooks
import { useAppleQueries, useSaveToken } from 'hooks'

const AppleLayout = () => {
  const [idToken] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token=')[1])

  const navigate = useNavigate()

  try {
    const res: any = useAppleQueries({ idToken })[0]

    if (res.isError === true) {
      navigate('/signup', {
        state: {
          socialId: res.error.response.data.socialId,
          socialLoginType: res.error.response.data.socialLoginType
        }
      })
    } else {
      useSaveToken({
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken
      })
      navigate('/app/main')
    }
  } catch (err: unknown) {}

  return <>{idToken}</>
}

export default AppleLayout
