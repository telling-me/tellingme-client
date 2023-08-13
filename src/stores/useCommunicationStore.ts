import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

// type
import type { ICommunicationStore } from './type'

const useCommunicationStore = create<ICommunicationStore>()(
  devtools(
    immer((set) => ({
      questionIdx: 0,
      questions: [],
      sortIdx: 0,
      page: 0,
      answers: [],
      setQuestionIdx: (value) => {
        set((state) => {
          state.questionIdx = value
        })
      },
      setQuestions: (value) => {
        set((state) => {
          state.questions = value
        })
      },
      setSortIdx: (value) => {
        set((state) => {
          state.sortIdx = value
        })
      },
      setPage: (value) => {
        set((state) => {
          state.page = value
        })
      },
      setAnswers: (value) => {
        set((state) => {
          state.answers = value
        })
      }
    }))
  )
)

export default useCommunicationStore
