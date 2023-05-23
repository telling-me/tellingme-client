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
    rotateZ: 360,
    transition: { delay: i * 0.2, type: 'spring' }
  })
}

export const landingCircleAni = {
  init: {
    scale: 0,
    background: `${Theme.gradient.default_gradient()} padding-box, linear-gradient(51.82deg, #7cefa7 1.24%, #8fd3f4 89.34%) border-box`
  },
  ani: (i: number) => ({
    scale: 1,
    rotateZ: 360,
    background: `linear-gradient(#fff,#fff) padding-box, linear-gradient(51.82deg, #7cefa7 1.24%, #8fd3f4 89.34%) border-box`,
    transition: {
      delay: i * 0.2,
      duration: 1,
      type: 'spring'
    }
  })
}
