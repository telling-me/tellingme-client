import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type IQuestionStore } from './type'

// Store을 더 만들어서 관리 할 수 있음
const useQuestionStore = create<IQuestionStore>()(
  devtools(
    immer((set) => ({
      isEmotionModalOn: false,
      setIsEmotionModal: (value) => {
        set((state) => {
          state.isEmotionModalOn = value
        })
      }
    }))
  )
)

export default useQuestionStore
