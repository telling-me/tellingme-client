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
    await API.patch('/api/answer/update', { date, content, isPublic }),

  getAllAnswerList: async (date: string, page: number, size: number, sort: '최신순' | '공감순' | '관련순') =>
    await API.get('/api/communication/list', { params: { date, page, size, sort } }),

  postLikes: async (answerId: number) => {
    return await API.post(
      '/api/likes',
      { answerId },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
