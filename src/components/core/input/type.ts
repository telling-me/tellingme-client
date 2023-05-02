import type { Dispatch, SetStateAction } from 'react'

export interface IInput {
  _placeholder: string
  _value: string
  setValue: Dispatch<SetStateAction<string>>
  label?: string
  infoText?: string
  errorText?: string
  isError?: boolean
  setIsError?: Dispatch<SetStateAction<boolean>>
  _disabled?: boolean
  _margin?: string
  _width?: string
  _maxWidth?: string
}
