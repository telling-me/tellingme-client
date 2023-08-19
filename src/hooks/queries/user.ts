import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'
import { getCookie } from 'utils/cookies'

export const useGetUserInfoQuery = <T>(options?: T) => {
  return useQuery(['getUserInfo'], async () => await apis.getUserInfo(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled:
      getCookie('device') !== 'mobile' || (getCookie('accessToken') !== null && getCookie('accessToken') !== undefined),
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
    enabled:
      getCookie('device') !== 'mobile' || (getCookie('accessToken') !== null && getCookie('accessToken') !== undefined),
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetUserPushToken = <T>(options?: T) => {
  return useQuery(['getUserPushToken'], async () => await apis.getUserPushToken(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled:
      getCookie('device') !== 'mobile' || (getCookie('accessToken') !== null && getCookie('accessToken') !== undefined),
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
