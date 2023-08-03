import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'

// type
import type { ICommunicationStore } from './type'

const nowDate = new Date()

const useCommunicationStore = create<ICommunicationStore>()(
  devtools(
    immer((set) => ({
      questionDate: { year: nowDate.getFullYear(), month: nowDate.getMonth() + 1, day: nowDate.getDate() },
      setQuestionDateYear: (value) => {
        set((state) => {
          state.questionDate.year = value
        })
      },
      setQuestionDateMonth: (value) => {
        set((state) => {
          state.questionDate.month = value
        })
      },
      setQuestionDateDay: (value) => {
        set((state) => {
          state.questionDate.day = value
        })
      }
    }))
  )
)

export default useCommunicationStore
