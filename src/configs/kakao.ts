import { useKakaoTokenQuery } from 'hooks/queries'

const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY as string
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI as string

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

export const getKakaoAuthorizationCode = () => {
  window.location.href = KAKAO_AUTH_URL
}

export const getKakaoToken = (AUTHORIZATION_CODE: string) => {
  const { data } = useKakaoTokenQuery({
    client_id: REST_API_KEY,
    redirect_uri: REDIRECT_URI,
    code: AUTHORIZATION_CODE
  })

  const ACCESS_TOKEN = data?.data.access_token
  const REFRESH_TOKEN = data?.data.refresh_token

  console.log(ACCESS_TOKEN, REFRESH_TOKEN)
}
