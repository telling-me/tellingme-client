import React from 'react'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// components
import styled from 'styled-components'
import { Button } from 'components'

// assets
import Icons from 'assets/icons'

interface ISignUpHeader {
  step: number
  windowSize: number
  handleSkip: () => void
}

const SignUpHeader = ({ step, windowSize, handleSkip }: ISignUpHeader) => {
  return (
    <SignUpHeaderWrapper>
      <Icons.Logo width="81" height="34" fill={useChangeColor('logo')} _margin="12px 0px 12px 0px" />

      {[4, 5, 6].includes(step) && (
        <Button
          buttonType="noFilled"
          text="건너뛰기"
          textSize={windowSize > 767 ? 'h6' : 'b1'}
          textColor="logo"
          textHoverColor="primary200"
          _margin="0px 0px 0px auto"
          _onClick={handleSkip}
        />
      )}
    </SignUpHeaderWrapper>
  )
}

export const SignUpHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  margin-bottom: 12px;
`

export default SignUpHeader
