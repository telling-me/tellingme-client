import type { Dispatch, SetStateAction } from 'react'

export interface IInput {
  label?: string
  infoText?: string
  errorText?: string
  isError?: boolean
  _disabled?: boolean
  _placeholder: string
  _value: string
  _margin?: string
  _setValue: Dispatch<SetStateAction<string>>
}
