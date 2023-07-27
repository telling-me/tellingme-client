import { API } from './api'

export const answerApi = {
  getAnswer: async (date: string) => await API.get('/api/answer', { params: { date } }),

  getAnswerRecordCount: async (date: string) => await API.get('/api/answer/record', { params: { date } }),

  getMyAnswerList: async (month: string, year: string) =>
    await API.get('/api/answer/list', { params: { month, year } }),

  postAnswer: async (date: string, content: string, emotion: number, isPublic: boolean) =>
    await API.post(
      '/api/answer',
      { content, emotion, date, isPublic },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    ),

  deleteAnswer: async (date: string) => await API.delete('/api/answer/delete', { data: { date } }),

  updateAnswer: async (date: string, content: string, isPublic: boolean) =>
    await API.patch('/api/answer/update', { date, content, isPublic })
}
