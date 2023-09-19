import type { ColorType } from 'type/common'

export interface IToast {
  icon: React.ReactElement<any, any>
  text: string
  _backgroundColor?: ColorType
  _color?: ColorType
}
