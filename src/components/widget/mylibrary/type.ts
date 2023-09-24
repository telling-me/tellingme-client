export interface ILibraryInfoData {
  month: string
  answerLength: string
}

export interface IData {
  emotion: number
  title: string
  phrase: string
  date: number[]
  content: string
}

export interface ILibraryData {
  exist: boolean
  data: IData
}
