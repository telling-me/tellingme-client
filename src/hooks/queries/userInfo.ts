import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'

export const useGetUserInfoQuery = <T>(options?: T) => {
  return useQuery(['getUserInfo'], async () => await apis.getUserInfo(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetUserNotiQuery = <T>(options?: T) => {
  return useQuery(['getUserNoti'], async () => await apis.getUserNoti(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
