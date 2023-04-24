export interface IFont {
  weight: {
    extraBold: string
    bold: string
    regular: string
    light: string
  }
  size: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
    b1: string
    b2: string
    c: string
  }
  lineHeight: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    h6: string
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
    h1: '48px',
    h2: '32px',
    h3: '26px',
    h4: '24px',
    h5: '19px',
    h6: '17px',
    b1: '15px',
    b2: '14px',
    c: '12px'
  },
  lineHeight: {
    h1: '1',
    h2: '1',
    h3: '1',
    h4: '1',
    h5: '1',
    h6: '1',
    b1: '1',
    b2: '1',
    c: '1'
  }
}

export default font
