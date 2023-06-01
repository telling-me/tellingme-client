import { removeCookie } from 'utils/cookies'

const useDeleteToken = () => {
  removeCookie('accessToken')
  removeCookie('refreshToken')
}

export default useDeleteToken
