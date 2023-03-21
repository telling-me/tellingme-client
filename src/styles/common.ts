export interface ICommon {
  flexCenter: string
  flexBetween: string
  flexStart: string
  flexEnd: string
}

const common: ICommon = {
  flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,
  flexBetween: `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
  flexStart: `
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `,
  flexEnd: `
        display: flex;
        justify-content: flex-End;
        align-items: center;
    `
}

export default common
