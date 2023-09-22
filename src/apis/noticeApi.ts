import { API } from './api'

export const noticeApi = {
  getNotice: async () => await API.get('/api/notice'),
  getNoticeSummary: async () => await API.get('/api/notice/summary'),

  postNoticeReadAll: async () =>
    await API.post('/api/notice/readAll', {
      headers: { 'Content-Type': 'application/json' }
    }),

  postNoticeRead: async (noticeId: number) =>
    await API.post(`/api/notice/read/${noticeId}`, {
      headers: { 'Content-Type': 'application/json' }
    }),

  deleteNotice: async (noticeId: number) =>
    await API.delete(`/api/notice/${noticeId}`, {
      headers: { 'Content-Type': 'application/json' }
    })
}
