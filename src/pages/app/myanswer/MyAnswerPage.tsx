import React from 'react'
import styled from 'styled-components'

// components
import { CoreButton, LandingBubble } from 'components'

const MyAnswerPage = () => {
  return (
    <MyAnswerWrapper>
      <LandingBubble />
      <CoreButton size="default" styleType="filled" text="내 기록이야!" />
    </MyAnswerWrapper>
  )
}
const MyAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MyAnswerPage
