/* eslint-disable @typescript-eslint/restrict-template-expressions */

import axios from 'axios'
import { getCookie } from 'utils/cookies'

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
export const KAKAO_TOKEN_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_TOKEN_API_URL,
  headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})
export const KAKAO_USER_INFO_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_USER_INFO_API_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    Authorization: `Bearer ${getCookie('accessToken')}`
  }
})
