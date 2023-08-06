import { useMutation, useQueryClient } from 'react-query'
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

export const usePostLikesMutation = <T>(option?: T) => {
  const queryClient = useQueryClient()

  return useMutation(async (data: { answerId: number }) => await apis.postLikes(data.answerId), {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['answer', 'allAnswerList'])
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}

export const usePostAccuseMutation = <T>(option?: T) => {
  return useMutation(
    async (data: { answerId: number; reason: number }) => await apis.postAccuse(data.answerId, data.reason),
    {
      onSuccess: async () => {},
      onError: (err) => {
        console.log(err)
      },
      ...option
    }
  )
}
