import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export type CheckSizeType = 'small' | 'large'

export interface ICheckSquare {
  _checked: boolean
  setChecked?: Dispatch<SetStateAction<boolean>>
  customChange?: (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => void
  checkSize?: CheckSizeType
  _disabled?: boolean
}

export interface ICheckBox extends ICheckSquare {
  label: string
  buttonText?: string
  buttonOnClick?: MouseEventHandler<HTMLButtonElement>
  _margin?: string
  _padding?: string
  _maxWidth?: string
  isBackground?: boolean
}
