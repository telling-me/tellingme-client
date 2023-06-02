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

API.interceptors.request.use(function (config) {
  const token = getCookie('accessToken')

  // TODO: 추후에 API 통신 시, 토큰이 필요한 API에 대해서만 토큰을 넣어주도록 수정
  if (
    (config.url?.includes('answer') ?? false) ||
    (config.url?.includes('question') ?? false) ||
    (config.url?.includes('user') ?? false)
  ) {
    if (token !== null || token !== undefined) config.headers.accessToken = token
  }

  return config
})
