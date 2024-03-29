import { type IShadow } from './shadow'
import { type IFont } from './font'
import { type ITypo } from './typo'
import { type IGray } from './gray'
import { type ICommon } from './common'
import { type IGradient } from './gradient'
import 'styled-components'
import { type IPrimary } from './primary'
import { type ISecondary } from './secondary'
import { type IError } from './error'
import { type ISide } from './colors/side'
import { type IEmotion } from './emotion'
import { type ISub } from './sub'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: IGray
      primary: IPrimary
      secondary: ISecondary
      side: ISide
      logo: string
      sub: ISub
      error: IError
      emotion: IEmotion
    }
    typo: ITypo
    font: IFont
    shadow: IShadow
    gradient: IGradient
    common: ICommon
  }
}
