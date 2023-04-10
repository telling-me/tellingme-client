import type { Dispatch, SetStateAction } from 'react'
import type { DropdownType } from 'type/common'

export interface IDropdown {
  label?: string
  dropdownType: DropdownType
  _selected: string | undefined
  _setSelected: Dispatch<SetStateAction<string | undefined>>
  _padding: string
  _margin?: string
  _flexGrow?: string
}
