/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react'
import { useQueries, useQuery } from 'react-query'

// apis
import { apis } from 'apis/apis'
import type { IJoinResponseDto, IKakaoTokenData } from 'apis/userApi'

export const useCheckIdQuery = (loginType: string, socialId: string, idToken?: string) => {
  return {
    queryKey: ['userToken'],
    queryFn: async () => await apis.checkUserInfo(loginType, socialId, idToken),
    onSuccess: (res: any) => {
      return res
    },
    onError: (err: any) => {
      return err
    },
    enabled: socialId.length > 0 || (idToken !== undefined && idToken?.length > 0),
    retry: 0
  }
}

export const useKakaoQueries = ({ client_id, redirect_uri, code }: IKakaoTokenData) => {
  const [accessToken, setAccessToken] = useState('')
  const [socialId, setSocialId] = useState('')

  return useQueries([
    {
      queryKey: ['getKakaoToken'],
      queryFn: async () =>
        await apis.getKakaoToken({
          client_id,
          redirect_uri,
          code
        }),
      onSuccess: (res: any) => {
        setAccessToken(res.data.access_token)
      },
      retry: 0
    },
    {
      queryKey: ['getKakaoUserInfo'],
      queryFn: async () => await apis.getKakaoUserInfo(accessToken),
      enabled: accessToken.length > 0,
      onSuccess: (res: any) => {
        setSocialId(res.data.id.toString())
      },
      retry: 0
    },
    useCheckIdQuery('kakao', socialId)
  ])
}

export const useAppleQueries = ({ idToken }: { idToken: string }) => {
  return useQueries([useCheckIdQuery('apple', null, idToken)])
}

export const useSignUpQuery = ({
  allowNotification,
  birthDate,
  gender,
  job,
  jobInfo,
  mbti,
  nickname,
  purpose,
  socialId,
  socialLoginType,
  pushToken
}: IJoinResponseDto) => {
  return useQuery(
    ['signup'],
    async () =>
      await apis.signup({
        allowNotification,
        birthDate,
        gender,
        job,
        jobInfo,
        mbti,
        nickname,
        purpose,
        socialId,
        socialLoginType,
        pushToken
      }),
    {
      enabled: false,
      retry: 0
    }
  )
}
