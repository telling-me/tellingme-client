export interface ICommonFilter {
  order_by?: string
  order?: string
}

export interface ICommonStore {
  prevPage: number
  setPrevPage: (value: number) => void
}

export interface IQuestionStore {
  isWriteModalOn: boolean
  setIsWriteModal: (value: boolean) => void
  isEmotionModalOn: boolean
  setIsEmotionModal: (value: boolean) => void
}
