export interface ITypo {
  title: {
    display: string
    h1: string
    h2: string
    h3: string
    h4: string
  }
  body: {
    p_bold: string
    p: string
    span_bold: string
    span: string
  }
}

const typo: ITypo = {
  title: {
    display: `
            font-weight: 700;
            font-size: 80px;
            line-height: 1.2;
        `,
    h1: `
            font-weight: 700; 
            font-size: 40px;
            line-height: 1.25;
        `,
    h2: `
            font-weight: 700;
            font-size: 32px;
            line-height: 1.25;
        `,
    h3: `
            font-weight: 700;
            font-size: 24px;
            line-height: 1.25;
        `,
    h4: `
            font-weight: 700;
            font-size: 18px;
            line-height: 1.5;
        `
  },
  body: {
    p_bold: `
            font-weight: 500;
            font-size: 14px;
            line-height: 1.75;
        `,
    p: `
            font-weight: 300; 
            font-size: 14px;
            line-height: 1.75;
        `,
    span_bold: `
            font-weight: 500;
            font-size: 12px;
            line-height: 1.75;
        `,
    span: `
            font-weight: 300;
            font-size: 12px;
            line-height: 1.75;
        `
  }
}

export default typo
