import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type ICommonStore } from './type'

// Store을 더 만들어서 관리 할 수 있음
const useCommonStore = create<ICommonStore>()(
  devtools(
    immer((set) => ({
      headerBackground: false,
      setHeaderBackground: (value) => {
        set((state) => {
          state.headerBackground = value
        })
      },
      prevPage: 0,
      setPrevPage: (value) => {
        set((state) => {
          state.prevPage = value
        })
      },
      currPage: 0,
      setCurrPage: (value) => {
        set((state) => {
          state.currPage = value
        })
      },

      // modal
      mobileOnlyModal: false,
      setMobileOnlyModal: (value) => {
        set((state) => {
          state.mobileOnlyModal = value
        })
      }
    }))
  )
)

export default useCommonStore
