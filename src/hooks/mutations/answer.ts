import { useMutation } from 'react-query'
import { apis } from 'apis/apis'

export const useDeleteAnswerMutation = <T>(option?: T) => {
  return useMutation(async (data: { date: string }) => await apis.deleteAnswer(data.date), {
    onSuccess() {},
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}

export const useUpdateAnswerMutation = <T>(option?: T) => {
  return useMutation(
    async (data: { date: string; content: string; isPublic: boolean }) =>
      await apis.updateAnswer(data.date, data.content, data.isPublic),
    {
      onSuccess() {},
      onError: (err) => {
        console.log(err)
      },
      ...option
    }
  )
}
