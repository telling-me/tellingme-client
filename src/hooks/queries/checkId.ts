import { apis } from 'apis/apis'

export const useCheckIdQuery = (loginType: string, socialId: string) => {
  return {
    queryKey: ['userToken'],
    queryFn: async () => await apis.checkUserInfo(loginType, socialId),
    onSuccess: (res: any) => {
      return res
    },
    onError: (err: any) => {
      return err
    },
    enabled: socialId.length > 0,
    retry: 0
  }
}
