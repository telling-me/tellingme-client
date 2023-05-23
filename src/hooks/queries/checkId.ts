import { apis } from 'apis/apis'
import { useNavigate } from 'react-router-dom'

// hooks
import useSaveToken from 'hooks/useSaveToken'

export const useCheckIdQuery = (loginType: string, socialId: string, idToken?: string) => {
  const navigate = useNavigate()
  return {
    queryKey: ['userToken'],
    queryFn: async () => await apis.checkUserInfo(loginType, socialId, idToken),
    onSuccess: (res: any) => {
      navigate('/app/main')
      useSaveToken({
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken
      })
    },
    onError: (err: any) => {
      navigate('/signup', {
        state: {
          socialId: err.response.data.socialId,
          socialLoginType: err.response.data.socialLoginType
        }
      })
    },
    enabled: socialId.length > 0,
    retry: 0
  }
}
