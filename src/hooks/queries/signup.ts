import { useQuery } from 'react-query'
import { apis } from 'apis/apis'
import type { IError } from 'type/db'
import type { IJoinResponseDto } from 'apis/userApi'

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
  socialLoginType
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
        socialLoginType
      }),
    {
      enabled: false,
      retry: 0,
      onError: (err: IError) => {
        console.log(err)
      }
    }
  )
}
