import { API } from 'configs/axios'

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
export const userApi = {
  login: async (loginData: ILoginData) =>
    await API.post('/member/auth/login', loginData),
  signup: async (data: { userData: IUserData }) =>
    await API.post('/member/auth/registration', data.userData, {
      params: { userData: data.userData }
    }),
  test: async () => {
    const data = await API.get('/')
    return data
  }
}
