import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type IAnswerStore } from './type'

const useAnswerStore = create<IAnswerStore>()(
  devtools(
    immer((set) => ({
      myAnswerFilter: { month: '06', year: '23' },
      setMyAnswerMonth: (value) => {
        set((state) => {
          state.myAnswerFilter.month = value
        })
      },
      setMyAnswerYear: (value) => {
        set((state) => {
          state.myAnswerFilter.year = value
        })
      },
      emotion: null,
      setEmotion: (value) => {
        set((state) => {
          state.emotion = value
        })
      }
    }))
  )
)

export default useAnswerStore
