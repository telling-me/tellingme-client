import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'
import { getCookie } from 'utils/cookies'

export const useGetMyAnswerListQuery = <T>(month: string, year: string, options?: T) => {
  return useQuery(['answer', 'myAnswerList', month, year], async () => await apis.getMyAnswerList(month, year), {
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

export const useGetAnswerQuery = <T>(answerId: string, options?: T) => {
  return useQuery(['answer', 'completed', answerId], async () => await apis.getAnswer(answerId), {
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

export const useGetAllAnswerListQuery = <T>(
  date: string,
  page: number,
  size: number,
  sort: '최신순' | '공감순' | '관련순',
  options?: T
) => {
  return useQuery(
    ['answer', 'allAnswerList', date, sort, page],
    async () => await apis.getAllAnswerList(date, page, size, sort),
    {
      retry: 0,
      onError: (err: IError) => {
        console.log(err)
      },
      enabled:
        getCookie('device') !== 'mobile' ||
        (getCookie('accessToken') !== null && getCookie('accessToken') !== undefined),
      staleTime: 36000000,
      cacheTime: 0,
      ...options
    }
  )
}
