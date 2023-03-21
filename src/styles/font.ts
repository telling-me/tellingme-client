export interface IFont {
  weight: {
    extraBold: string
    bold: string
    regular: string
    light: string
  }
  size: {
    display: string
    h1: string
    h2: string
    h3: string
    h4: string
    b1: string
    b2: string
    c: string
  }
  lineHeight: {
    display: string
    h1: string
    h2: string
    h3: string
    h4: string
    b1: string
    b2: string
    c: string
  }
}

const font: IFont = {
  weight: {
    extraBold: '800',
    bold: '700',
    regular: '400',
    light: '300'
  },
  size: {
    display: '48px',
    h1: '32px',
    h2: '26px',
    h3: '19px',
    h4: '17px',
    b1: '15px',
    b2: '14px',
    c: '12px'
  },
  lineHeight: {
    display: '1',
    h1: '1',
    h2: '1',
    h3: '1',
    h4: '1',
    b1: '1',
    b2: '1',
    c: '1'
  }
}

export default font
