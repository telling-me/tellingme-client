import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'

export const useGetTodayQuestionQuery = <T>(options?: T) => {
  return useQuery(['todayQuestion'], async () => await apis.getTodayQuestion(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetTodayAnswerQuery = <T>(options?: T) => {
  return useQuery(['todayAnswer'], async () => await apis.getTodayAnswer(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
