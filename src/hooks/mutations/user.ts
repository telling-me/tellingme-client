import { apis } from 'apis/apis'
import { type ILoginData } from 'apis/userApi'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { type IError } from 'type/db'

export const useLoginMutation = <T>(persistent: boolean, options?: T) => {
  const navigate = useNavigate()
  return useMutation(
    async (loginData: ILoginData) => await apis.login(loginData),
    {
      onSuccess: (data) => {
        if (persistent) console.log('쿠키에 토큰 저장')
        navigate('/login', { replace: true })
      },
      onError: (err: IError) => {
        console.log(err)
      },
      ...options
    }
  )
}
