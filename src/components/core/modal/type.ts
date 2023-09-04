import type { MouseEventHandler } from 'react'
import type { ColorType } from 'type/common'

export interface IModal {
  _width?: string
  _maxWidth?: string
  _height?: string
  _maxHeight?: string
  _borderRadius?: string
  _padding?: string
  _onClick?: MouseEventHandler<HTMLDivElement>
  children: React.ReactNode
}

export interface IOneButtonModal {
  text: string
  _onClick: () => void
}

export interface ITwoButtonModal {
  mainText: string
  subText?: string
  subTextColor?: ColorType
  leftBtnText?: string
  rightBtnText: string
  leftBtnOnClick: () => void
  rightBtnOnClick: () => void
  children?: React.ReactNode
}
