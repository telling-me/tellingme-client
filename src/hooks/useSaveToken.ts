import { setCookie } from 'utils/cookies'

interface Tokens {
  accessToken: string
  refreshToken: string
}

const useSaveToken = (tokens: Tokens) => {
  setCookie('accessToken', tokens.accessToken, { path: '/' })
  setCookie('refreshToken', tokens.refreshToken, { path: '/' })
}

export default useSaveToken
