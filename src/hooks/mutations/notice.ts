import { QueryClient, useMutation } from 'react-query'
import { apis } from 'apis/apis'

export const useDeleteNoticeMutation = <T>(option?: T) => {
  return useMutation(async (data: { noticeId: number }) => await apis.deleteNotice(data.noticeId), {
    onSuccess: async () => {
      const queryClient = new QueryClient()
      await queryClient.invalidateQueries('notice')
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}

export const usePostNoticeReadMutation = <T>(option?: T) => {
  return useMutation(async (data: { noticeId: number }) => await apis.postNoticeRead(data.noticeId), {
    onSuccess: async () => {
      const queryClient = new QueryClient()
      await queryClient.invalidateQueries('notice')
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}

export const usePostNoticeReadAllMutation = <T>(option?: T) => {
  return useMutation(async () => await apis.postNoticeReadAll(), {
    onSuccess: async () => {
      const queryClient = new QueryClient()
      await queryClient.invalidateQueries('notice')
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}
