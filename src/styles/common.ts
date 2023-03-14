export interface ICommon {
  flexCenter: string
  flexBetween: string
  flexStart: string
  flexEnd: string
  ellipsis: string
  ellipsis_multi: (line: number) => string
  scroll: string
  scrollToggle: (scroll_on: boolean) => string
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
    `,
  ellipsis: `
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
    `,
  ellipsis_multi(line: number) {
    return `
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: ${line};
    `
  },
  scroll: `
    &::-webkit-scrollbar {
        width: 14px;
        height: 14px;
        margin-right: 3px;
    }
    &::-webkit-scrollbar-track {
        background: none;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.25);
        background-clip: padding-box;
        border: 4px solid transparent;
    }
    `,
  scrollToggle: (scrollOn) => {
    return `
        &::-webkit-scrollbar {
            width: 14px;
            margin-right: 3px;
            display: ${scrollOn ? 'block' : 'none'};
        }
        &::-webkit-scrollbar-track {
            background: none;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 8px;
            background-color: rgba(0, 0, 0, 0.25);
            background-clip: padding-box;
            border: 4px solid transparent;
        }
    `
  }
}

export default common
