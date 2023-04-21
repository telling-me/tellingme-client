// type
import type { MouseEventHandler } from 'react'
import type { IconType, ColorType } from 'type/common'

export type IconSizeType = 'small' | 'medium' | 'large' | 'xl'
export type ShadowType = 'shadow1' | 'shadow2' | 'shadow3'

export interface IIcon {
  icon: IconType
  iconSize: IconSizeType
  iconColor: ColorType
  iconShadow?: ShadowType
  _margin?: string
  _onClick?: MouseEventHandler<HTMLDivElement>
}
