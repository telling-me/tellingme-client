import { userApi } from 'apis/userApi'
import { questionApi } from 'apis/questionApi'
import { answerApi } from 'apis/answerApi'

export const apis = {
  ...userApi,
  ...questionApi,
  ...answerApi
}
