import type { Dispatch, MouseEventHandler, SetStateAction } from 'react'

export interface ICheckBox {
  label: string
  buttonText?: string
  _checked: boolean
  _disabled?: boolean
  _setChecked: Dispatch<SetStateAction<boolean>>
  _onClick?: MouseEventHandler<HTMLButtonElement>
}
