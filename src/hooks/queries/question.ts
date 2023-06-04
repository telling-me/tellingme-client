import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'

export const useGetQuestionQuery = <T>(date: string, options?: T) => {
  return useQuery(['question', date], async () => await apis.getQuestion(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetAnswerQuery = <T>(date: string, options?: T) => {
  return useQuery(['answer', date], async () => await apis.getAnswer(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetAnswerRecordCountQuery = <T>(date: string, options?: T) => {
  return useQuery(['answer', 'answerCount'], async () => await apis.getAnswerRecordCount(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
