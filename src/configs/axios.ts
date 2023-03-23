import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})
export const KAKAO_API = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_API_URL,
  headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' }
})

// 헤더 추가
