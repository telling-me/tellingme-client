export interface IShadow {
  test: string
}

const shadow: IShadow = {
  test: '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4.05px 3.4875px rgba(0, 0, 0, 0.0675), 0px 1.6px 1.3px rgba(0, 0, 0, 0.05), 0px 0.35px 0.4625px rgba(0, 0, 0, 0.0325)'
}

const dropShadow: IShadow = {
  test: 'filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4.05px 3.4875px rgba(0, 0, 0, 0.0675)) drop-shadow(0px 1.6px 1.3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0.35px 0.4625px rgba(0, 0, 0, 0.0325))'
}

const shadows = {
  shadow,
  dropShadow
}

export default shadows
