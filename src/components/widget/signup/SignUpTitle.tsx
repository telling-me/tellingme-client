import React from 'react'

// type
import type { ISignUpTitleAndBottomButton } from './type'

// data
import { stepTextData } from 'data/user'

// components
import style from 'styles/styled-components/styled'
import styled, { useTheme } from 'styled-components'
import { IconButton } from 'components'

// assets
import Icons from 'assets/icons'

const SignUpTitle = ({
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

  return (
    <>
      {step !== 7 &&
        (windowSize < 1024 ? (
          <TextSpan
            typo="h4"
            textColor="black"
            _margin={
              [0, 1].includes(step)
                ? '60px 0 110px 0'
                : step === 2
                ? '60px 0 52px 0'
                : step === 3
                ? '60px 0 30px 0'
                : '60px 0 8px 0'
            }
          >
            {stepTextData[step]}
          </TextSpan>
        ) : (
          windowSize >= 1024 && (
            <WebMoveButtonWrapper
              _margin={
                [0, 1].includes(step) ? '60px 0 110px 0' : [2, 3].includes(step) ? '60px 0 70px 0' : '60px 0 8px 0'
              }
            >
              <IconButton
                buttonType="secondary"
                _width="55px"
                _height="55px"
                _margin="0 auto 0 0"
                _disabled={step === 0}
                _onClick={handlePrevStep}
              >
                <Icons.ArrowLeft
                  width="24"
                  height="24"
                  stroke={step === 0 ? theme.colors.gray.gray4 : theme.colors.logo}
                />
              </IconButton>

              <TextSpan typo="h4" textColor="black">
                {stepTextData[step]}
              </TextSpan>

              <IconButton
                buttonType="secondary"
                _width="55px"
                _height="55px"
                _margin="0 0 0 auto"
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
                <Icons.ArrowRight
                  width="24"
                  height="24"
                  stroke={canMove() ? theme.colors.gray.gray4 : theme.colors.logo}
                />
              </IconButton>
            </WebMoveButtonWrapper>
          )
        ))}

      {step === 4 && (
        <TextSpan typo="b2" textColor="gray6" _margin={windowSize < 1024 ? '0 0 40px 0' : '0 0 60px 0'}>
          최대 2가지 선택 가능
        </TextSpan>
      )}
    </>
  )
}

const { TextSpan } = style

export const WebMoveButtonWrapper = styled.div<{ _margin: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  ${({ _margin }) => `margin: ${_margin}`};
`

export default SignUpTitle
