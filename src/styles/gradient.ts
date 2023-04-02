export interface IGradient {
  default_gradient: (degree?: number) => string
}

const gradient: IGradient = {
  default_gradient: (degree?: number) => `
    linear-gradient(${degree ?? 56.1}deg, #7CEFA7 0%, #8FD3F4 120.13%)
  `
}
export default gradient
