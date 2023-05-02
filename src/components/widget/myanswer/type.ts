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
  date: string
}

export interface ITable {
  data: any[]
}
