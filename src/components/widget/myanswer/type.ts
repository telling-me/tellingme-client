export interface IMyAnswerMode {
  isSelected: boolean
  _onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface IMyAnswerModeButton extends IMyAnswerMode {
  children: React.ReactNode
}

export interface ITableCell {
  emotion: number
  question: string
  date: string[]
}

export interface IMyAnswer {
  data: any[]
}

export interface IData {
  emotion: number
  title: string
  phrase: string
  date: number[]
  content: string
}

export interface ICardViewCard {
  data: IData
  isMargin?: boolean
  _onClick: () => void
}
