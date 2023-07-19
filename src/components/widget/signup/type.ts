export interface ISignUpTitleAndBottomButton {
  step: number
  handlePrevStep: () => void
  handleNextStep: () => void
  windowSize: number
  canMove: () => boolean
  handleCheckNickname: () => void
  handleSignUp: () => void
}
