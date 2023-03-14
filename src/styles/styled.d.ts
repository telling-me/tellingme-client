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
        primary10_lighten: string
        primary15: string
        primary20: string
        primary30: string
        primary40: string
        primary50_key: string
        primary60: string
        primary70: string
        primary80_darken: string
        primary90: string
        primary95: string
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
