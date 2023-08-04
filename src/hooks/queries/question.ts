import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'

export const useGetQuestionQuery = <T>(date: string, options?: T) => {
  return useQuery(['question', date], async () => await apis.getQuestion(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    onSuccess(data) {
      // TODO: 날짜에 맞는 질문이 없을 때의 임시 로직
      if (data?.data?.status === 3000) {
        window.location.href = '/app/main'
      }
      return data
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

export const useGetCommunicationQuestionsQuery = <T>(date: string, options?: T) => {
  return useQuery(['communicationQuestions', date], async () => await apis.getCommunicationQuestions(date), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
