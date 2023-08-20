/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react'
import { useQueries } from 'react-query'

// apis
import { apis } from 'apis/apis'
import type { IKakaoTokenData } from 'apis/userApi'

export const useCheckIdQuery = (loginType: string, oauthToken: string | null) => {
  return {
    queryKey: ['userToken'],
    queryFn: async () => await apis.checkUserInfo(loginType, oauthToken),
    onSuccess: (res: any) => {
      return res
    },
    onError: (err: any) => {
      return err
    },
    enabled: oauthToken != null && oauthToken.length > 0,
    retry: 0
  }
}

export const useKakaoQueries = ({ client_id, redirect_uri, code }: IKakaoTokenData) => {
  const [accessToken, setAccessToken] = useState('')

  return useQueries([
    {
      queryKey: ['getKakaoToken'],
      queryFn: async () =>
        await apis.getKakaoToken({
          client_id,
          redirect_uri,
          code
        }),
      onSuccess: (res: any) => {
        setAccessToken(res.data.access_token)
      },
      retry: 0
    },
    useCheckIdQuery('kakao', accessToken)
  ])
}

export const useAppleQueries = ({ idToken }: { idToken: string }) => {
  return useQueries([useCheckIdQuery('apple', idToken)])
}
