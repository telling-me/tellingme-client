export interface ICommonFilter {
  order_by?: string
  order?: string
}

export interface ICommonStore {
  page: number
  setPage: (value: number) => void
  keyword: string
  setKeyword: (value: string) => void
}
