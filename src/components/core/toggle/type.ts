import { type Dispatch, type SetStateAction } from 'react'
import { type ColorType } from 'type/common'

export interface IToggle {
  label?: string | string[]
  leftColor?: ColorType
  rightColor?: ColorType
  _disabled?: boolean
  value: boolean
  _margin?: string
  setValue: Dispatch<SetStateAction<boolean>>
  _onClick?: () => void
}

export interface IToggleChip {
  label?: string | string[]
  action?: boolean
  color?: ColorType
  actionColor?: ColorType
  _disabled?: boolean
  _margin?: string
  _width?: string
  _height?: string
  _padding?: string
  _onClick?: () => void
}
