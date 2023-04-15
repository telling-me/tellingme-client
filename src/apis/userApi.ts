import { API, KAKAO_TOKEN_API, KAKAO_USER_INFO_API } from 'configs/axios'

type SocialLoginType = 'kakao' | 'apple'

export interface IUserData {
  name: string
  email: string
}
export interface ILoginData {
  name: string
  email: string
}
export interface ITest {
  result: string
}
export interface IKakaoTokenData {
  client_id: string
  redirect_uri: string
  code: string
}
export interface IJoinResponseDto {
  allowNotification: boolean
  birthDate?: string
  gender?: string
  job: number
  jobInfo: string
  mbti?: string
  nickname: string
  purpose: string
  socialId: string
  socialLoginType: SocialLoginType
}
export const userApi = {
  login: async (loginData: ILoginData) => await API.post('/member/auth/login', loginData),
  signup: async (joinResponseDto: IJoinResponseDto) => {
    return await API.post(`/api/oauth/join`, joinResponseDto, {
      headers: { 'Content-Type': 'application/json' }
    })
  },
  test: async () => {
    const data = await API.get('/')
    return data
  },
  getKakaoToken: async (data: IKakaoTokenData) => {
    return await KAKAO_TOKEN_API.post('/oauth/token', {
      grant_type: 'authorization_code',
      client_id: data.client_id,
      redirect_uri: data.redirect_uri,
      code: data.code
    })
  },
  getKakaoUserInfo: async (accessToken: string) => {
    return await KAKAO_USER_INFO_API.post(
      '/v2/user/me',
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
  },
  checkUserInfo: async (loginType: string, socialId: string) => {
    return await API.post(
      `/api/oauth/${loginType}`,
      { socialId },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  },
  checkNickname: async (nickname: string) => {
    return await API.post(
      '/api/oauth/nickname',
      { nickname },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
