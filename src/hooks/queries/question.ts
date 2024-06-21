import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'
import { getCookie } from '../../utils/cookies'

export const useGetQuestionQuery = <T>(date: string, options?: T) => {
  console.log('date', date)
  return useQuery(['question', date], async () => await apis.getQuestion(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    onSuccess(data) {
      // TODO: 날짜에 맞는 질문이 없을 때의 임시 로직
      // if (data?.data?.status === 3000) {
      //   window.location.href = '/app/main'
      // }
      return data
    },
    enabled:
      getCookie('accessToken') !== null &&
      getCookie('accessToken') !== undefined &&
      date !== undefined &&
      date !== null,
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetMyAnswerQuery = <T>(date: string, options?: T) => {
  return useQuery(['answer', date], async () => await apis.getMyAnswer(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled: getCookie('accessToken') !== null && getCookie('accessToken') !== undefined,
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
    enabled: getCookie('accessToken') !== null && getCookie('accessToken') !== undefined,
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}

export const useGetCommunicationQuestionsQuery = <T>(date: string, options?: T) => {
  return useQuery(['communicationQuestions', date], async () => await apis.getCommunicationQuestions(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    enabled: getCookie('accessToken') !== null && getCookie('accessToken') !== undefined,
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
