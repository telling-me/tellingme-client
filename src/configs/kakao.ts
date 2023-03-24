import { useKakaoTokenQuery, useKakaoUserInfoQuery } from 'hooks/queries'
import { setCookie } from 'utils/cookies'

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY as string
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI as string

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

const saveToken = (accessToken: string, refreshToken: string) => {
  setCookie('accessToken', accessToken)
  setCookie('refreshToken', refreshToken)
}

const getKakaoUserInfo = () => {
  const { data } = useKakaoUserInfoQuery()

  console.log(data)
}

export const getKakaoAuthorizationCode = () => {
  window.location.href = KAKAO_AUTH_URL
}

export const getKakaoToken = (AUTHORIZATION_CODE: string) => {
  const { data } = useKakaoTokenQuery({
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: AUTHORIZATION_CODE
  })

  const accessToken = data?.data.access_token
  const refreshToken = data?.data.refresh_token

  saveToken(accessToken, refreshToken)
  getKakaoUserInfo()
}
