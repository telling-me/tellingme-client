import type { Dispatch, SetStateAction } from 'react'

export interface IDropdown {
  label?: string
  defaultText: string
  data: string[] | number[]
  _selected: string | undefined
  _setSelected: Dispatch<SetStateAction<string | undefined>>
  _width?: string
  _padding?: string
  _margin?: string
  _flexGrow?: string
}
