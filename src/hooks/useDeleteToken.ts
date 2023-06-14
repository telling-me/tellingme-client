import { removeCookie } from 'utils/cookies'

const useDeleteToken = () => {
  removeCookie('accessToken', { path: '/' })
  removeCookie('refreshToken', { path: '/' })
}

export default useDeleteToken
