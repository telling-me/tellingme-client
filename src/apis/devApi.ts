import { API } from './api'
// 임시로 Dev에서 사용할 api입니다.
export const devApi = {
  get500Error: async () => await API.get('/api/error')
}
