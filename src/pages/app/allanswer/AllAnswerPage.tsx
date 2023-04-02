import React from 'react'
import styled from 'styled-components'

// components
import { CoreButton, LandingBubble } from 'components'

const AllAnswerPage = () => {
  return (
    <AllAnswerWrapper>
      <LandingBubble />
      <CoreButton
        size="default"
        styleType="filled"
        text="모든 사람 답변보기!"
      />
    </AllAnswerWrapper>
  )
}

const AllAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default AllAnswerPage
