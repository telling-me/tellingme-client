export interface IGradient {
  default_gradient: (degree?: number) => string
}

const gradient: IGradient = {
  default_gradient: (degree?: number) => `
    linear-gradient(${degree ?? 56.9}deg, #B0F5CA 22.63%, #8FD3F4 114.48%)
  `
}

export default gradient
