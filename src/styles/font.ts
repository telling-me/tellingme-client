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
    p: string
    span: string
  }
  lineHeight: {
    display: string
    h1: string
    h2: string
    h3: string
    h4: string
    p: string
    span: string
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
    display: '80px',
    h1: '40px',
    h2: '32px',
    h3: '24px',
    h4: '18px',
    p: '14px',
    span: '12px'
  },
  lineHeight: {
    display: '1.2',
    h1: '1.25',
    h2: '1.25',
    h3: '1.25',
    h4: '1.5',
    p: '1.75',
    span: '1.5'
  }
}

export default font
