import { useMutation } from 'react-query'
import { apis } from 'apis/apis'

// TODO: Mutation으로 post날리기
export const usePostAnswerMutation = <T>(option?: T) => {
  return useMutation(
    async (data: { date: string; content: string; emotion: number; isPublic: boolean }) =>
      await apis.postAnswer(data.date, data.content, data.emotion, data.isPublic),
    {
      onSuccess() {},
      onError: (err) => {
        console.log(err)
      },
      ...option
    }
  )
}
