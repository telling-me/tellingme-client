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
        primary25: string
        primary50: string
        primary100: string
        primary200: string
        primary300: string
        primary400_main: string
        primary500: string
        primary600: string
        primary700: string
        primary800: string
        primary900: string
      }
      secondary: {
        secondary25: string
        secondary50: string
        secondary100: string
        secondary200: string
        secondary300: string
        secondary400_main: string
        secondary500: string
        secondary600: string
        secondary700: string
        secondary800: string
      }
      side: {
        side100: string
        side200: string
        side300: string
      }
      logo: string
    }
    typo: ITypo
    font: IFont
    shadow: IShadow
    drop_shadow: IShadow
    gradient: IGradient
    common: ICommon
  }
}
