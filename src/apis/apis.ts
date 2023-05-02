import { userApi } from 'apis/userApi'
import { questionApi } from 'apis/questionApi'

export const apis = {
  ...userApi,
  ...questionApi
}
