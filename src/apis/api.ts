import axios from 'axios'
import { getCookie } from 'utils/cookies'

export const API = axios.create({})

export const NO_AUTH_API = axios.create({})

export const KAKAO_TOKEN_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_TOKEN_API_URL,
  headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

export const KAKAO_USER_INFO_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_USER_INFO_API_URL
})

API.interceptors.request.use(function (config) {
  const token = getCookie('accessToken')

  if (token !== null || token !== undefined) config.headers.accessToken = token
  return config
})

API.interceptors.response.use(function (response) {
  const responseStatus = response.status
  if (responseStatus === 403) {
    location.href = '/'
  }
  if (responseStatus === 500) {
    location.href = '/'
  }
  return response
})
