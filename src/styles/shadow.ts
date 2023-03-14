export interface IShadow {
  depth01: string
  depth02: string
  depth03: string
  depth04: string
}

const shadow: IShadow = {
  depth01:
    '0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4.05px 3.4875px rgba(0, 0, 0, 0.0675), 0px 1.6px 1.3px rgba(0, 0, 0, 0.05), 0px 0.35px 0.4625px rgba(0, 0, 0, 0.0325)',
  depth02:
    '0px 16px 16px rgba(0, 0, 0, 0.07), 0px 8.1px 6.975px rgba(0, 0, 0, 0.04725), 0px 3.2px 2.6px rgba(0, 0, 0, 0.035), 0px 0.7px 0.925px rgba(0, 0, 0, 0.02275);',
  depth03:
    '0px 24px 24px rgba(0, 0, 0, 0.1), 0px 12.15px 10.4625px rgba(0, 0, 0, 0.0675), 0px 4.8px 3.9px rgba(0, 0, 0, 0.05), 0px 1.05px 1.3875px rgba(0, 0, 0, 0.0325)',
  depth04:
    '0px 64px 64px rgba(0, 0, 0, 0.1), 0px 32.4px 27.9px rgba(0, 0, 0, 0.0675), 0px 12.8px 10.4px rgba(0, 0, 0, 0.05), 0px 2.8px 3.7px rgba(0, 0, 0, 0.0325);'
}

const dropShadow: IShadow = {
  depth01:
    'filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4.05px 3.4875px rgba(0, 0, 0, 0.0675)) drop-shadow(0px 1.6px 1.3px rgba(0, 0, 0, 0.05)) drop-shadow(0px 0.35px 0.4625px rgba(0, 0, 0, 0.0325))',
  depth02:
    'filter: drop-shadow(0px 16px 16px rgba(0, 0, 0, 0.07)) drop-shadow(0px 8.1px 6.975px rgba(0, 0, 0, 0.04725)) drop-shadow(0px 3.2px 2.6px rgba(0, 0, 0, 0.035)) drop-shadow(0px 0.7px 0.925px rgba(0, 0, 0, 0.02275))',
  depth03:
    'filter: drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.1)), drop-shadow(0px 12.15px 10.4625px rgba(0, 0, 0, 0.0675)), drop-shadow(0px 4.8px 3.9px rgba(0, 0, 0, 0.05)), drop-shadow(0px 1.05px 1.3875px rgba(0, 0, 0, 0.0325))',
  depth04:
    'filter: drop-shadow(0px 64px 64px rgba(0, 0, 0, 0.1)), drop-shadow(0px 32.4px 27.9px rgba(0, 0, 0, 0.0675)), drop-shadow(0px 12.8px 10.4px rgba(0, 0, 0, 0.05)), drop-shadow(0px 2.8px 3.7px rgba(0, 0, 0, 0.0325));'
}

const shadows = {
  shadow,
  dropShadow
}

export default shadows
