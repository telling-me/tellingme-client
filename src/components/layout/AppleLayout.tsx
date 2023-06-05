import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// hooks
import { useSaveToken } from 'hooks'
import { useCheckIdQuery } from 'hooks/queries'

const ApplyLayout = () => {
  const [idToken] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token=')[1])

  const navigate = useNavigate()

  try {
    const res: any = useCheckIdQuery('apple', '', idToken)

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

  return <></>
}

export default ApplyLayout
