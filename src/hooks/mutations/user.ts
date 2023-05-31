import { apis } from 'apis/apis'
import type { IUserInfoDto, ILoginData } from 'apis/userApi'
import useDeleteToken from 'hooks/useDeleteToken'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { type IError } from 'type/db'

export const useLoginMutation = <T>(persistent: boolean, options?: T) => {
  const navigate = useNavigate()
  return useMutation(async (loginData: ILoginData) => await apis.login(loginData), {
    onSuccess: (data) => {
      if (persistent) console.log('쿠키에 토큰 저장')
      navigate('/login', { replace: true })
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}

export const usePatchUserInfoMutation = <T>(options?: T) => {
  return useMutation(async (userInfoDto: IUserInfoDto) => await apis.patchUserInfo(userInfoDto), {
    onSuccess: (res) => {
      window.location.replace('/setting')
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}

export const useDeleteUser = <T>(options?: T) => {
  return useMutation(async () => await apis.deleteUser(), {
    onSuccess: (res) => {
      useDeleteToken()
      window.location.href = '/'
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}

export const useLogoutMutation = <T>(options?: T) => {
  return useMutation(async () => await apis.logout(), {
    onSuccess: (res) => {
      useDeleteToken()
      window.location.href = '/'
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}
