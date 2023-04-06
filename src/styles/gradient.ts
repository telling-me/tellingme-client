export interface IGradient {
  default_gradient: (degree?: number) => string
}

const gradient: IGradient = {
  default_gradient: (degree?: number) => `
    background: linear-gradient(${degree ?? 51.82}deg, #7CEFA7 1.24%, #8FD3F4 89.34%);
  `
}

export default gradient
