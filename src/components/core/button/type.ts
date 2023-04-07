import type { MouseEventHandler, RefObject } from 'react'
import { type IconType, type ColorType, type TextSizeType } from 'type/common'
import { type IconSizeType } from '../icon/type'

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'tertiaryModified' | 'fourth'
export type ContentType = 'icon' | 'text' | 'row' | 'col'

export interface IButton {
  buttonType: ButtonType
  contentType: ContentType
  text?: string
  textSize?: TextSizeType
  textColor?: ColorType
  icon?: IconType
  iconSize?: IconSizeType
  iconColor?: ColorType
  _margin?: string
  _padding?: string
  _gap?: string
  _disabled?: boolean
  _onClick?: MouseEventHandler<HTMLButtonElement>
  _ref?: RefObject<HTMLButtonElement>
}
