import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'
import { getCookie } from '../../utils/cookies'

export const useGetNoticeQuery = <T>(options?: T) => {
  return useQuery(['notice'], async () => await apis.getNotice(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled: getCookie('accessToken') !== null && getCookie('accessToken') !== undefined,
    staleTime: 0,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetNoticeSummaryQuery = <T>(options?: T) => {
  return useQuery(['notice', 'summary'], async () => await apis.getNoticeSummary(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled: getCookie('accessToken') !== null && getCookie('accessToken') !== undefined,
    staleTime: 0,
    cacheTime: Infinity,
    ...options
  })
}
