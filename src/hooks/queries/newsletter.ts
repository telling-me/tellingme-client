import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import type { INewsLetterData } from 'apis/userApi'

export const useNewsLetterQuery = ({ email, name, funnel }: INewsLetterData) => {
  return useQuery(
    ['newsLetter'],
    async () =>
      await apis.newsLetter({
        email,
        name,
        funnel
      }),
    {
      enabled: false,
      retry: 0,
      onSuccess: () => {
        window.location.href = '/newsletter/complete'
      }
    }
  )
}
