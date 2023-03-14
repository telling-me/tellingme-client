export interface IGradient {
  purple_gradient: (degree: number) => string
  gray05: (degree: number) => string
  white: (degree: number) => string
}

const gradient: IGradient = {
  purple_gradient: (degree) =>
    `linear-gradient(${degree}deg, #F8D2E8 -3.06%, #D1C7F1 61.81%, #C5E1F0 119.04%);`,
  gray05: (degree) =>
    `linear-gradient(${degree}deg, rgba(248, 249, 250, 0) 0%, #F8F9FA 100%)`,
  white: (degree) =>
    `linear-gradient(${degree}deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)`
}

export default gradient
