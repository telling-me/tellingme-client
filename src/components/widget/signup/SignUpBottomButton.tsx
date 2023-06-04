import React from 'react'
import { requestPermission } from 'firebase-messaging-sw'
import type { ISignUpTitleAndBottomButton } from './type'

// components
import styled from 'styled-components'
import { Button, IconButton } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'

const SignUpBottomButton = ({
  step,
  handlePrevStep,
  handleNextStep,
  windowSize,
  canMove,
  canLastMove,
  handleCheckNickname
}: ISignUpTitleAndBottomButton) => {
  return windowSize < 1024 && step !== 7 ? (
    <MoveButtonWrapper>
      <IconButton buttonType="secondary" _width="55px" _height="55px" _disabled={step === 0} _onClick={handlePrevStep}>
        <Icons.ArrowLeft width="24" height="24" stroke={useChangeColor('logo')} />
      </IconButton>

      {step !== 6 ? (
        <IconButton
          buttonType="secondary"
          _width="55px"
          _height="55px"
          _margin="0px 0px 0px auto"
          _disabled={canMove()}
          _onClick={() => {
            if (step === 1) {
              handleCheckNickname()
            } else {
              handleNextStep()
            }
          }}
        >
          <Icons.ArrowRight width="24" height="24" stroke={useChangeColor('logo')} />
        </IconButton>
      ) : (
        <Button
          buttonType="secondary"
          text="완료"
          textSize="h6"
          textColor="logo"
          _margin="0px 0px 0px auto"
          _padding="18px 32px"
          _disabled={canLastMove()}
          _onClick={() => {
            handleNextStep()
            requestPermission()
          }}
        />
      )}
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

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: auto 0px 70px 0px;
  }

  @media all and (max-width: 767px) {
    margin: auto 0px 70px 0px;
  }
`

export default SignUpBottomButton
