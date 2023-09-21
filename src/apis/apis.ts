import { userApi } from 'apis/userApi'
import { questionApi } from 'apis/questionApi'
import { answerApi } from 'apis/answerApi'
import { devApi } from 'apis/devApi'
import { adminApi } from './adminApi'
import { noticeApi } from './noticeApi'

export const apis = {
  ...userApi,
  ...questionApi,
  ...answerApi,
  ...devApi,
  ...adminApi,
  ...noticeApi
}
