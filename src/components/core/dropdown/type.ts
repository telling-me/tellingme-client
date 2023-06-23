import type { Dispatch, SetStateAction } from 'react'

export type DropdownSizeType = 'small' | 'large'

export interface IDropdown {
  dropdownSize: DropdownSizeType
  defaultText: string
  data: string[] | number[]
  _selected: string | null
  _setSelected: Dispatch<SetStateAction<string | null>>
  direction?: 'up' | 'down'
  label?: string
  unit?: string
  _maxWidth?: string
  _margin?: string
  _disabled?: boolean
}
