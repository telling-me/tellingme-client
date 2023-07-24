import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import type { IError } from 'type/db'

export const useGetReportList = <T>(options?: T) => {
  return useQuery(['getReportList'], async () => await apis.getReportList(), {
    retry: 0,
    onError: (err: IError) => {
      console.log(err)
    },
    staleTime: 36000000,
    cacheTime: Infinity,
    ...options
  })
}
