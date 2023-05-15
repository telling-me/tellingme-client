import React from 'react'

// config
import { REDIRECT_URI, REST_API_KEY } from 'configs/kakao'

// hooks
import { useKakaoQueries } from 'hooks'

const KakaoLayout = () => {
  const AUTHORIZATION_CODE: string = new URL(document.location.toString()).searchParams.get('code') as string

  useKakaoQueries({
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: AUTHORIZATION_CODE
  })

  return <></>
}

export default KakaoLayout
