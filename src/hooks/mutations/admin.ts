import { useMutation } from 'react-query'
import { apis } from 'apis/apis'

export const useExpireReport = <T>(option?: T) => {
  return useMutation(async (data: { answerIds: string }) => await apis.expireReport(data.answerIds), {
    onSuccess: async () => {
      window.location.replace('/admin/report')
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}
