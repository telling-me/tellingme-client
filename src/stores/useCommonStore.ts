import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type ICommonStore } from './type'

// Store을 더 만들어서 관리 할 수 있음
const useCommonStore = create<ICommonStore>()(
  devtools(
    immer((set) => ({
      page: 1,
      setPage: (value) => {
        set((state) => {
          state.page = value
        })
      },
      keyword: '',
      setKeyword: (value) => {
        set((state) => {
          state.keyword = value
        })
      }
    }))
  )
)

export default useCommonStore
