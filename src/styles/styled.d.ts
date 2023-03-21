import { type IShadow } from './shadow'
import { type IFont } from './font'
import { type ITypo } from './typo'
import { type IGray } from './gray'
import { type ISystem } from './system'
import { type ICommon } from './common'
import { type IGradient } from './gradient'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: IGray
      system: ISystem
      primary: {
        primary100: string
        primary200: string
        primary300: string
        primary400: string
        primary500: string
        primary600: string
        primary700: string
        primary800_main: string
        primary900: string
      }
      text: {
        black: string
      }
    }
    typo: ITypo
    font: IFont
    shadow: IShadow
    drop_shadow: IShadow
    gradient: IGradient
    common: ICommon
  }
}
