import { type DefaultTheme } from 'styled-components'
import typo from './typo'
import font from './font'
import shadow from './shadow'
import gradient from './gradient'
import common from './common'

import error from './colors/error'
import side from './colors/side'
import primary from './colors/primary'
import secondary from './colors/secondary'
import gray from './colors/gray'

const Theme: DefaultTheme = {
  colors: {
    gray,
    primary,
    secondary,
    side,
    logo: '#07BEB8',
    error
  },
  typo,
  font,
  shadow,
  gradient,
  common
}

export { Theme }
