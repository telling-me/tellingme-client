import axios from 'axios'

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

// 헤더 추가
