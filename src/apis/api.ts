import axios from 'axios'
import { getCookie } from 'utils/cookies'

export const API = axios.create({})

export const KAKAO_TOKEN_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_TOKEN_API_URL,
  headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

export const KAKAO_USER_INFO_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_USER_INFO_API_URL
})

// TODO: 서버와 연결 확인하기
API.interceptors.request.use(function (config) {
  const token = getCookie('accessToken')
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/restrict-template-expressions
  config.headers.accessToken = token ?? ''

  return config
})
