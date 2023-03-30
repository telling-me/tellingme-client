import { apis } from 'apis/apis'

export const useCheckIdQuery = (loginType: string, socialId: string) => {
  return {
    queryKey: ['checkUserInfo'],
    queryFn: async () => await apis.checkUserInfo(loginType, socialId),
    onSuccess: (res: any) => {
      return res
    },
    enabled: socialId.length > 0,
    retry: 0
  }
}
