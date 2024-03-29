import { useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'

// apis
import { apis } from 'apis/apis'
import type { IJoinResponseDto, IUserInfoDto } from 'apis/userApi'
// hooks
import { useDeleteToken, useFilterling } from 'hooks'

// type
import { type IError } from 'type/db'

export const usePatchUserInfoMutation = <T>(setOpen: React.Dispatch<React.SetStateAction<boolean>>, options?: T) => {
  return useMutation(async (userInfoDto: IUserInfoDto) => await apis.patchUserInfo(userInfoDto), {
    onSuccess: async () => {
      window.location.replace('/app/main/setting')
      setOpen(false)
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}

export const useDeleteUser = <T>(options?: T) => {
  return useMutation(
    async (data: { code: string; socialType: string }) => await apis.deleteUser(data.code, data.socialType),
    {
      onSuccess: (res) => {
        useDeleteToken()
        window?.ReactNativeWebView?.postMessage(JSON.stringify({ event: 'withdraw' }))
        window.location.href = '/'
      },
      onError: (err: IError) => {
        console.log(err)
      },
      retry: false,
      ...options
    }
  )
}

export const useLogoutMutation = <T>(options?: T) => {
  return useMutation(async () => await apis.logout(), {
    onSuccess: (res) => {
      useDeleteToken()
      window?.ReactNativeWebView?.postMessage(JSON.stringify({ event: 'logout' }))
      window.location.href = '/'
    },
    onError: (err: IError) => {
      console.log(err)
    },
    ...options
  })
}

export const useSignUpMutation = <T>(setLoading: React.Dispatch<React.SetStateAction<boolean>>, options?: T) => {
  const navigate = useNavigate()

  return useMutation(
    async ({ birthDate, gender, job, jobInfo, nickname, purpose, socialId, socialLoginType }: IJoinResponseDto) =>
      await apis.signup({
        birthDate,
        gender,
        job,
        jobInfo,
        nickname,
        purpose,
        socialId,
        socialLoginType
      }),
    {
      onSuccess: (res) => {
        setLoading(false)
        navigate('/signup/complete')
      },
      onError: (err: IError) => {
        console.log(err)
      },
      ...options
    }
  )
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

export const useUpdateUserPushToken = <T>(option?: T) => {
  return useMutation(async (data: { pushToken: string }) => await apis.updateUserPushToken(data.pushToken), {
    onSuccess() {},
    onError: (err) => {
      console.log(err)
    },
    ...option
  })
}
