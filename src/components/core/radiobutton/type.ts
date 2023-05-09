import type { Dispatch, SetStateAction } from 'react'
import type { TextSizeType } from 'type/common'

// small (24px) / medium (32px)
export type MainSizeType = 'small' | 'medium'

export interface IOptions {
  label: string
  value: any
}

export interface IRadioButton {
  options: IOptions[]
  mainSize?: MainSizeType
  labelSize?: TextSizeType
  labelMainGap?: string
  wrapperGap?: string
  _margin?: string
  _value: string
  _setValue: Dispatch<SetStateAction<string>>
}
