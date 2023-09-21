import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { devtools } from 'zustand/middleware'
import { type ILibraryStore } from './type'

const useLibraryStore = create<ILibraryStore>()(
  devtools(
    immer((set) => ({
      myLibraryFilter: { month: '06', year: '23' },
      setMyLibraryMonth: (value) => {
        set((state) => {
          state.myLibraryFilter.month = value
        })
      },
      setMyLibraryYear: (value) => {
        set((state) => {
          state.myLibraryFilter.year = value
        })
      }
    }))
  )
)

export default useLibraryStore
