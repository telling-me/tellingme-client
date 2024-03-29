import React from 'react'

// type
import type { ISignUpTitleAndBottomButton } from './type'

// components
import styled, { useTheme } from 'styled-components'
import { IconButton } from 'components'

// assets
import Icons from 'assets/icons'

const SignUpBottomButton = ({
  step,
  handlePrevStep,
  handleNextStep,
  windowSize,
  canMove,
  handleCheckNickname,
  handleCheckBirthYear,
  handleSignUp,
  setLoading
}: ISignUpTitleAndBottomButton) => {
  const theme = useTheme()

  return windowSize < 1024 && step !== 7 ? (
    <MoveButtonWrapper>
      <IconButton buttonType="secondary" _width="55px" _height="55px" _disabled={step === 0} _onClick={handlePrevStep}>
        <Icons.ArrowLeft width="24" height="24" stroke={step === 0 ? theme.colors.gray.gray4 : theme.colors.logo} />
      </IconButton>

      <IconButton
        buttonType="secondary"
        _width="55px"
        _height="55px"
        _margin="0px 0px 0px auto"
        _disabled={canMove()}
        _onClick={() => {
          if (step === 1) {
            handleCheckNickname()
          } else if (step === 2) {
            handleCheckBirthYear()
          } else if (step === 4) {
            setLoading(true)
            handleSignUp()
          } else {
            handleNextStep()
          }
        }}
      >
        <Icons.ArrowRight width="24" height="24" stroke={canMove() ? theme.colors.gray.gray4 : theme.colors.logo} />
      </IconButton>
    </MoveButtonWrapper>
  ) : (
    <></>
  )
}

const MoveButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 430px;

  @media all and (min-width: 1024px) {
    margin-top: 110px;
  }

  @media all and (max-width: 1023px) {
    margin: auto 0px 70px 0px;
  }
`

export default SignUpBottomButton
