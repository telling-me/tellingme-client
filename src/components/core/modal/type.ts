import type { MouseEventHandler } from 'react'

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
