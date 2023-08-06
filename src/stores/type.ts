export interface ICommonFilter {
  order_by?: string
  order?: string
}

export interface ICommonStore {
  headerBackground: boolean
  setHeaderBackground: (value: boolean) => void
  prevPage: number
  setPrevPage: (value: number) => void
  currPage: number
  setCurrPage: (value: number) => void
}

export interface IQuestionStore {
  isEmotionModalOn: boolean
  setIsEmotionModal: (value: boolean) => void
}

export interface IAnswerStore {
  myAnswerFilter: { month: string; year: string }
  setMyAnswerMonth: (value: string) => void
  setMyAnswerYear: (value: string) => void
  emotion: number | null
  setEmotion: (value: number) => void
}

export interface IQuestion {
  title: string
  phrase: string
  date: number[]
  answerCount: number
}

export interface ICommunicationStore {
  questionIdx: number
  questions: IQuestion[]
  sortIdx: number
  setQuestionIdx: (value: number) => void
  setQuestions: (value: IQuestion[]) => void
  setSortIdx: (value: number) => void
}
