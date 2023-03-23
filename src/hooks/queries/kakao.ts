/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IKakaoTokenData } from 'apis/userApi'
import { type IError } from 'type/db'

export const useKakaoTokenQuery = ({ client_id, redirect_uri, code }: IKakaoTokenData) => {
  return useQuery(
    'kakao',
    async () => {
      return await apis.kakaoToken({
        client_id,
        redirect_uri,
        code
      })
    },
    {
      retry: 0,
      onError: (err: IError) => {
        console.log(err)
      },
      staleTime: 36000000,
      cacheTime: Infinity
    }
  )
}
