import { API } from './api'

export const questionApi = {
  getTodayQuestion: async () => await API.get('/api/question/'),
  getTodayAnswer: async () => await API.get('/api/answer/'),
  getAnswerRecordCount: async () => await API.get('/api/answer/record/'),
  postTodayAnswer: async (content: string, emotion: number) =>
    await API.post(
      '/api/answer/',
      { content, emotion },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
}
