import { API, KAKAO_API } from 'configs/axios'

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
export const userApi = {
  login: async (loginData: ILoginData) => await API.post('/member/auth/login', loginData),
  signup: async (data: { userData: IUserData }) =>
    await API.post('/member/auth/registration', data.userData, {
      params: { userData: data.userData }
    }),
  test: async () => {
    const data = await API.get('/')
    return data
  },
  kakaoToken: async (kakaoData: IKakaoTokenData) => {
    const data = await KAKAO_API.post('/token', {
      grant_type: 'authorization_code',
      client_id: kakaoData.client_id,
      redirect_uri: kakaoData.redirect_uri,
      code: kakaoData.code
    })

    return data
  }
}
