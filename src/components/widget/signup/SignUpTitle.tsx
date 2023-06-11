import React from 'react'

// type
import type { ISignUpTitleAndBottomButton } from './type'

// data
import { stepTextData } from 'data/user'

// components
import style from 'styles/styled-components/styled'
import styled from 'styled-components'
import { Button, IconButton } from 'components'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'
import { requestPermission } from 'firebase-messaging-sw'

const SignUpTitle = ({
  step,
  handlePrevStep,
  handleNextStep,
  windowSize,
  canMove,
  canLastMove,
  handleCheckNickname,
  setPushToken
}: ISignUpTitleAndBottomButton) => {
  return (
    <>
      {step !== 7 &&
        (windowSize < 1024 ? (
          <style.TextSpan
            typo="h4"
            textColor="black"
            _margin={
              [0, 1, 5, 6].includes(step) ? '60px 0px 110px 0px' : step === 2 ? '60px 0px 8px 0px' : '60px 0px 80px 0px'
            }
          >
            {stepTextData[step]}
          </style.TextSpan>
        ) : (
          windowSize >= 1024 && (
            <WebMoveButtonWrapper
              _margin={
                [0, 1, 5, 6].includes(step)
                  ? '60px 0px 110px 0px'
                  : step === 2
                  ? '60px 0px 8px 0px'
                  : '60px 0px 80px 0px'
              }
            >
              <IconButton
                buttonType="secondary"
                _width="55px"
                _height="55px"
                _margin="0px auto 0px 0px"
                _disabled={step === 0}
                _onClick={handlePrevStep}
              >
                <Icons.ArrowLeft width="24" height="24" stroke={useChangeColor('logo')} />
              </IconButton>

              <style.TextSpan typo="h4" textColor="black">
                {stepTextData[step]}
              </style.TextSpan>

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
                    requestPermission(setPushToken)
                  }}
                />
              )}
            </WebMoveButtonWrapper>
          )
        ))}

      {step === 2 && (
        <style.TextSpan typo="b2" textColor="gray6" _margin="0px 0px 60px 0px">
          최대 2가지 선택 가능
        </style.TextSpan>
      )}
    </>
  )
}

export const WebMoveButtonWrapper = styled.div<{ _margin: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  ${({ _margin }) => `margin: ${_margin}`};
`

export default SignUpTitle
