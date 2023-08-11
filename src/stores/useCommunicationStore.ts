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
      sortIdx: 2,
      page: 0,
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
      }
    }))
  )
)

export default useCommunicationStore
