import React from 'react'
import styled from 'styled-components'

// components
import { CoreButton, LandingBubble } from 'components'

const MainPage = () => {
  return (
    <MainWrapper>
      <LandingBubble />
      <CoreButton size="default" styleType="filled" text="메인 페이지야!" />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MainPage
