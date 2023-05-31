import { useMutation } from 'react-query'
import { apis } from 'apis/apis'

// TODO: Mutation으로 post날리기
export const usePostTodayAnswerMutation = <T>(date: string, option?: T) => {
  return useMutation(async (platformChoice: string) => await apis.postAnswer(date, 'data', 0), {
    onSuccess() {},
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}
