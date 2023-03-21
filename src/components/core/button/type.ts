import type { MouseEventHandler, RefObject } from 'react'

export type ButtonSize = 'large' | 'default' | 'small'
export type StyleType = 'filled' | 'tonal' | 'outlined' | 'text'

export interface IDangerButton {
  text?: string
  _margin?: string
  _disabled?: boolean
  _onClick?: MouseEventHandler<HTMLButtonElement>
  _ref?: RefObject<HTMLButtonElement>
  isLoading?: boolean
}

export interface IButton extends IDangerButton {
  size: ButtonSize
  styleType: StyleType
  _width?: string
  isLoading?: boolean
}
