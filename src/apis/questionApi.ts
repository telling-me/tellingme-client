import { API } from './api'

export const questionApi = {
  getQuestion: async (date: string) => await API.get('/api/question', { params: { date } }),
  getAnswer: async (date: string) => await API.get('/api/answer', { params: { date } }),
  getAnswerRecordCount: async (date: string) => await API.get('/api/answer/record', { params: { date } }),
  postAnswer: async (date: string, content: string, emotion: number) =>
    await API.post(
      '/api/answer',
      { content, emotion, date },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
}
