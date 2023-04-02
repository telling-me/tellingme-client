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
      primary25: '#F2FdF6',
      primary50: '#E5FCED',
      primary100: '#CBF9DC',
      primary200: '#B0F5CA',
      primary300: '#A3F4C1',
      primary400_main: '#7CEFA7',
      primary500: '#7DCE9B',
      primary600: '#7EB894',
      primary700: '#57A775',
      primary800: '#808B84',
      primary900: '#254832'
    },
    secondary: {
      secondary25: '#F4FBFE',
      secondary50: '#E9F6FD',
      secondary100: '#D2EDFB',
      secondary200: '#BCE5F8',
      secondary300: '#A5DCF6',
      secondary400_main: '#8FD3F4',
      secondary500: '#8BBAD1',
      secondary600: '#8599A3',
      secondary700: '#6494AB',
      secondary800: '#486A7A'
    },
    side: {
      side100: '#FFFDFA',
      side200: '#F9F7F2',
      side300: '#CCCAC8'
    },
    logo: '#07BEB8'
  },
  typo,
  font,
  shadow: shadows.shadow,
  drop_shadow: shadows.dropShadow,
  gradient,
  common
}

export { Theme }
