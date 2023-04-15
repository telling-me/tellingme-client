import React from 'react'
import { REDIRECT_URI, REST_API_KEY } from 'configs/kakao'
import { useKakaoQueries, useSaveToken } from 'hooks/index'
import { useNavigate } from 'react-router-dom'

const KakaoLayout = () => {
  const AUTHORIZATION_CODE: string = new URL(document.location.toString()).searchParams.get('code') as string

  const navigate = useNavigate()

  try {
    const res: any = useKakaoQueries({
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: AUTHORIZATION_CODE
    })[2]

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
    }
  } catch (err: unknown) {}

  return <></>
}

export default KakaoLayout
