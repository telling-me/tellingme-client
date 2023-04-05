/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React from 'react'
import { REDIRECT_URI, REST_API_KEY } from 'configs/kakao'
import { useKakaoQueries, useSaveToken } from 'hooks/index'

const KakaoLayout = () => {
  const AUTHORIZATION_CODE: string = new URL(document.location.toString()).searchParams.get('code') as string

  const res = useKakaoQueries({
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: AUTHORIZATION_CODE
  })[2].data?.data

  if (res) {
    useSaveToken({
      accessToken: res.accessToken,
      refreshToken: res.refreshToken
    })
  }

  return <></>
}

export default KakaoLayout
