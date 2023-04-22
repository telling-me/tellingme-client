import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import type { TextSizeType } from 'type/common'

// small (24px) / medium (32px)
export type MainSizeType = 'small' | 'medium'

export interface ICheckBox {
  label: string
  labelSize?: TextSizeType
  mainLabelGap?: string
  buttonText?: string
  mainSize?: MainSizeType
  _checked: boolean
  _disabled?: boolean
  _setChecked: Dispatch<SetStateAction<boolean>>
  _onClick?: MouseEventHandler<HTMLButtonElement>
  _margin?: string
}
