import { type DefaultTheme } from 'styled-components'
import gray from './gray'
import system from './system'
import typo from './typo'
import font from './font'
import shadows from './shadow'
import gradient from './gradient'
import common from './common'

const Theme: DefaultTheme = {
  colors: {
    gray,
    system,
    primary: {
      primary100: '#EBFEFF',
      primary200: '#ACFBFF',
      primary300: '#8FF9FF',
      primary400: '#70F8FF',
      primary500: '#14F3FF',
      primary600: '#00CBD6',
      primary700: '#00AEB8',
      primary800_main: '#009199',
      primary900: '#00747A'
    },
    text: {
      black: '#1F2626'
    }
  },
  typo,
  font,
  shadow: shadows.shadow,
  drop_shadow: shadows.dropShadow,
  gradient,
  common
}

export { Theme }
