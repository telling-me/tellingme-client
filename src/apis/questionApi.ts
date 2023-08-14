import { API } from './api'

export const questionApi = {
  getQuestion: async (date: string) => await API.get('/api/question', { params: { date } }),
  getCommunicationQuestions: async (date: string) => await API.get('/api/communication', { params: { date } })
}
