export interface ISignUpTitleAndBottomButton {
  step: number
  handlePrevStep: () => void
  handleNextStep: () => void
  windowSize: number
  canMove: () => boolean
  handleCheckNickname: () => void
  handleCheckBirthYear: () => void
  handleSignUp: () => void
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
