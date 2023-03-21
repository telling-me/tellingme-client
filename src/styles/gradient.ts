export interface IGradient {
  default_gradient: (degree?: number) => string
}

const gradient: IGradient = {
  default_gradient: (degree?: number) => `
    background: linear-gradient(${
      degree ?? 56.1
    }deg, #FFE27A 0%, #F0FFE4 45.67%, #ACFBFF 120.13%);
  `
}

export default gradient
