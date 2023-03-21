import font from 'styles/font'

export interface ITypo {
  title: {
    display_b: string
    display: string
    h1_b: string
    h1: string
    h2_b: string
    h2: string
    h3_b: string
    h3: string
    h4_b: string
    h4: string
  }
  body: {
    b1_b: string
    b1: string
    b2_b: string
    b2: string
  }
  caption: {
    c_b: string
    c: string
  }
}

const typo: ITypo = {
  title: {
    display_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.display};
      line-height: ${font.lineHeight.display};
      `,
    display: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.display};
      line-height: ${font.lineHeight.display};
      `,
    h1_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.h1};
      line-height: ${font.lineHeight.h1};
      `,
    h1: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.h1};
      line-height: ${font.lineHeight.h1};
      `,
    h2_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.h2};
      line-height: ${font.lineHeight.h2};
      `,
    h2: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.h2};
      line-height: ${font.lineHeight.h2};
      `,
    h3_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.h3};
      line-height: ${font.lineHeight.h3};
      `,
    h3: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.h3};
      line-height: ${font.lineHeight.h3};
      `,
    h4_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.h4};
      line-height: ${font.lineHeight.h4};
      `,
    h4: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.h4};
      line-height: ${font.lineHeight.h4};
      `
  },
  body: {
    b1_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.b1};
      line-height: ${font.lineHeight.b1};
      `,
    b1: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.b1};
      line-height: ${font.lineHeight.b1};
      `,
    b2_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.b2};
      line-height: ${font.lineHeight.b2};
      `,
    b2: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.b2};
      line-height: ${font.lineHeight.b2};
      `
  },
  caption: {
    c_b: `
      font-weight: ${font.weight.bold};
      font-size: ${font.size.c};
      line-height: ${font.lineHeight.c};
      `,
    c: `
      font-weight: ${font.weight.regular};
      font-size: ${font.size.c};
      line-height: ${font.lineHeight.c};
      `
  }
}

export default typo
