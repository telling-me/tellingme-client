import { NO_AUTH_API } from 'apis/api'

export const adminApi = {
  getReportList: async () => {
    return await NO_AUTH_API.get('/api/report/blindList')
  },
  expireReport: async (answerIds: string) => {
    return await NO_AUTH_API.post(
      `/api/report/expireBlind`,
      { answerIds },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
