export interface ICommonFilter {
  order_by?: string
  order?: string
}

export interface ICommonStore {
  prevPage: number
  setPrevPage: (value: number) => void
}
