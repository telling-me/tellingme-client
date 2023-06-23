import { useMutation, useQueryClient } from 'react-query'

// apis
import { apis } from 'apis/apis'
import type { IUserInfoDto } from 'apis/userApi'

// hooks
import useDeleteToken from 'hooks/useDeleteToken'
import { useFilterling } from '..'

// type
import { type IError } from 'type/db'

export const usePatchUserInfoMutation = <T>(setOpen: React.Dispatch<React.SetStateAction<boolean>>, options?: T) => {
  const queryClient = useQueryClient()

  return useMutation(async (userInfoDto: IUserInfoDto) => await apis.patchUserInfo(userInfoDto), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('getUserInfo')
      setOpen(false)
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

export const useCheckNicknameMutation = <T>(
  nickname: string,
  setIsError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorText: React.Dispatch<React.SetStateAction<string>>,
  handleNickname: () => void,
  options?: T
) => {
  return useMutation(async () => await apis.checkNickname(nickname), {
    onSuccess: (res: any) => {
      if (res.data === '' && useFilterling(nickname)) {
        handleNickname()
      } else {
        setIsError(true)

        if (res.data.status === 1100) {
          setErrorText('중복된 닉네임입니다')
        } else if (res.data.status === 1101) {
          setErrorText('2-8글자 이내로 작성해주세요')
        } else if ([1102, 1103, 1104].includes(res.data.status)) {
          setErrorText('영문, 숫자, 띄어쓰기, 특수문자 사용 불가합니다')
        } else {
          setErrorText('사용불가 닉네임입니다')
        }
      }
    },
    onError: () => {
      setIsError(true)
      setErrorText('사용불가 닉네임입니다')
    },
    ...options
  })
}

export const useUnsubscribeNewsLetterMutation = <T>(option?: T) => {
  return useMutation(async (data: { email: string }) => await apis.unsubscribeNewsLetter(data.email), {
    onSuccess() {},
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}

export const usePostUserNotiQuery = <T>(option?: T) => {
  const queryClient = useQueryClient()

  return useMutation(async () => await apis.postUserNoti(), {
    onSuccess: async () => {
      await queryClient.invalidateQueries('getUserNoti')
    },
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}
