import { userApi } from 'apis/userApi'
import { questionApi } from 'apis/questionApi'
import { answerApi } from 'apis/answerApi'
import { devApi } from 'apis/devApi'

export const apis = {
  ...userApi,
  ...questionApi,
  ...answerApi,
  ...devApi
}
