import type { Dispatch, SetStateAction } from 'react'

export interface IInput {
  label?: string
  infoText?: string
  errorText?: string
  isError?: boolean
  setIsError?: Dispatch<SetStateAction<boolean>>
  _width?: string
  _disabled?: boolean
  _placeholder: string
  _value: string
  _margin?: string
  _setValue: Dispatch<SetStateAction<string>>
}
