import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type ICommonStore } from './type'

// Store을 더 만들어서 관리 할 수 있음
const useCommonStore = create<ICommonStore>()(
  devtools(
    immer((set) => ({
      prevPage: 0,
      setPrevPage: (value) => {
        set((state) => {
          state.prevPage = value
        })
      },
      landingScrollY: 0,
      setLandingScrollY: (value) => {
        set((state) => {
          state.landingScrollY = value
        })
      }
    }))
  )
)

export default useCommonStore
