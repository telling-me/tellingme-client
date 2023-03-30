/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { useQueries } from 'react-query'
import { apis } from 'apis/apis'
import { type IKakaoTokenData } from 'apis/userApi'
import { useState } from 'react'

export const useKakaoQueries = ({ client_id, redirect_uri, code }: IKakaoTokenData) => {
  const [accessToken, setAccessToken] = useState('')
  const [socialId, setSocialId] = useState('')

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
    {
      queryKey: ['getKakaoUserInfo'],
      queryFn: async () => await apis.getKakaoUserInfo(accessToken),
      enabled: accessToken.length > 0,
      onSuccess: (res: any) => {
        setSocialId(res.data.id.toString())
      },
      retry: 0
    }
  ])
}
