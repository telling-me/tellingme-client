import React from 'react'
import styled from 'styled-components'

// components
import { LandingBubble, Button } from 'components'

const MyAnswerPage = () => {
  return (
    <MyAnswerWrapper>
      <LandingBubble />
      <Button buttonType="tertiary" contentType="text" text="내 기록이야!" textColor="error300" textSize="h3" />
    </MyAnswerWrapper>
  )
}
const MyAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MyAnswerPage
