import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { type IError } from 'type/db'

export const useGetMyAnswerListQuery = <T>(month: string, year: string, options?: T) => {
  return useQuery(['answer', 'myAnswerList', month, year], async () => await apis.getMyAnswerList(month, year), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
