import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import type { ColorType, TextSizeType } from 'type/common'

export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'fourth' | 'noFilled' | 'logo'

export interface IButton {
  buttonType: ButtonType
  text?: string
  textSize?: TextSizeType
  textColor?: ColorType
  textHoverColor?: ColorType
  _active?: boolean
  _width?: string
  _height?: string
  _margin?: string
  _padding?: string
  _disabled?: boolean
  _onClick?: MouseEventHandler<HTMLButtonElement>
}

export interface INotOnlyButton {
  text: string
  _active: boolean
  _onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  _value?: string
  setValue?: Dispatch<SetStateAction<string>>
}

export interface IOnlyButton {
  buttonType: ButtonType
  _width: string
  _height: string
  _margin?: string
  _disabled?: boolean
  _onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
