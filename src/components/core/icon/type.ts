// type
import type { MouseEventHandler } from 'react'
import type { IconType, ColorType } from 'type/common'

export type IconSizeType = 'small' | 'medium' | 'large'

export interface IIcon {
  icon: IconType
  iconSize: IconSizeType
  iconColor: ColorType
  _onClick?: MouseEventHandler<HTMLDivElement>
  _margin?: string
}
