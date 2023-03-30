export const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY as string
export const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI as string

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
