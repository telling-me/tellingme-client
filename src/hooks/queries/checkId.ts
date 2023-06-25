import { apis } from 'apis/apis'

export const useCheckIdQuery = (loginType: string, socialId: string | null, idToken?: string) => {
  return {
    queryKey: ['userToken'],
    queryFn: async () => await apis.checkUserInfo(loginType, socialId, idToken),
    onSuccess: (res: any) => {
      return res
    },
    onError: (err: any) => {
      return err
    },
    enabled: (socialId != null && socialId.length > 0) || (idToken !== undefined && idToken?.length > 0),
    retry: 0
  }
}
