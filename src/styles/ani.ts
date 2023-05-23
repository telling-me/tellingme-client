import { Theme } from 'styles/DefaultTheme'

// modal
export const modalAni = {
  init: { opacity: 0 },
  ani: { opacity: 1 },
  exit: { opacity: 0 }
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
