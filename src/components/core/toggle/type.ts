import { type Dispatch, type SetStateAction } from 'react'
import { type ColorType } from 'type/common'

export interface IToggle {
  label?: string | string[]
  leftColor?: ColorType
  rightColor?: ColorType
  _disabled?: boolean
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>
  _onClick?: () => void
}
