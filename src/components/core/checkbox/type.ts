import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export type CheckSizeType = 'small' | 'large'

export interface ICheckSquare {
  _checked: boolean
  setChecked: Dispatch<SetStateAction<boolean>>
  checkSize?: CheckSizeType
  _disabled?: boolean
}

export interface ICheckBox extends ICheckSquare {
  label: string
  buttonText?: string
  buttonOnClick?: MouseEventHandler<HTMLButtonElement>
  _margin?: string
  _maxWidth?: string
}
