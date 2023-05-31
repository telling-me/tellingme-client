import { keyframes } from 'styled-components'
import { Theme } from 'styles/DefaultTheme'

// main app
// TODO: 위 아래 전환 슬라이드 애니메이션 추가 필요
export const AppAni = {
  init: { y: '-100%', transition: { type: 'spring', duration: 0.4 } },
  ani: { y: 0, transition: { type: 'spring', duration: 0.4 } },
  exit: { y: '100%', transition: { type: 'spring', duration: 0.4 } }
}

// landing
export const landingBubbleAni = {
  init: { scale: 0.2 },
  ani: { scale: 1, rotateZ: 360, transition: { type: 'spring' } }
}

export const landingLogoAni = {
  init: { scale: 0 },
  ani: (i: number) => ({
    scale: 1,
    transition: { delay: i * 0.2, type: 'spring' }
  })
}
export const landingSubAni = {
  init: { scale: 0 },
  ani: (i: number) => ({
    scale: 1,
    rotate: 360,
    transition: { delay: 0.4, type: 'spring' }
  })
}

export const landingCircleAni = {
  init: {
    scale: 0,
    background: `${Theme.gradient.default_gradient()} padding-box, ${Theme.gradient.default_gradient()} border-box`
  },
  ani: (i: number) => ({
    scale: 1,
    background: `linear-gradient(#fffdfa,#fffdfa) padding-box, ${Theme.gradient.default_gradient()} border-box`,
    transition: {
      delay: i * 0.2,
      duration: 1,
      type: 'spring'
    }
  })
}

export const floatAni = keyframes`
0%{
		transform: translatey(0px);
}
50%{
		transform: translatey(-10px);
}
100%{
		transform: translatey(0px);
}
`

export const rotateAni = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`

export const rotateReverseAni = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(-360deg);
}
`
