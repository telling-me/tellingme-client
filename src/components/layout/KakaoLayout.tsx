// import axios from 'axios'
import React from 'react'
import { getKakaoToken } from 'configs/kakao'

const KakaoLayout = () => {
  const AUTHORIZATION_CODE: string = new URL(document.location.toString()).searchParams.get('code') as string

  getKakaoToken(AUTHORIZATION_CODE)

  return <></>
}

export default KakaoLayout
