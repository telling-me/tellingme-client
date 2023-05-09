import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import { useFilterling } from '..'

export const useCheckNickname = (
  nickname: string,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorText: React.Dispatch<React.SetStateAction<string>>,
  setStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return useQuery(['signup'], async () => await apis.checkNickname(nickname), {
    enabled: false,
    retry: 0,
    onError: (err: any) => {
      setIsError(true)
      setErrorText(err.response.data.message)
    },
    onSuccess: (res: any) => {
      if (res.data === '' && useFilterling(nickname)) {
        setStep(2)
      } else {
        setIsError(true)
        setErrorText('사용불가 닉네임입니다.')
      }
    }
  })
}
