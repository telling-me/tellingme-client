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
      primary10_lighten: '#E2EDFF',
      primary15: '#CEE1FF',
      primary20: '#BBD6FF',
      primary30: '#93BEFF',
      primary40: '#6CA6FF',
      primary50_key: '#458EFF',
      primary60: '#0060F6',
      primary70: '#0051CE',
      primary80_darken: '#0042A7',
      primary90: '#003280',
      primary95: '#002359'
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
