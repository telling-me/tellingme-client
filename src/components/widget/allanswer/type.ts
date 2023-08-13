export interface IAnswer {
  answerId: number
  emotion: number
  content: string
  likeCount: number
  isLiked: boolean
  changeLikeCount: (answerId: number) => void
}
