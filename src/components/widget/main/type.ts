export interface INotice {
  noticeId: number
  title: string
  content: string | null
  isRead: boolean
  createdAt: string[]
  link: string | null
  isInternal: boolean
  answerId: number | null
  date: string
}
