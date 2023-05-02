import { API } from 'configs/axios'

export const questionApi = {
  getTodayQuestion: async () => await API.get('/api/question/'),
  getTodayAnswer: async () => await API.get('/api/answer/'),
  postTodayAnswer: async (content: string, emotion: number) =>
    await API.post(
      '/api/answer/',
      { content, emotion },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
}
