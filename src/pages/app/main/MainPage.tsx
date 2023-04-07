import React from 'react'
import styled from 'styled-components'

// components
import { Button, LandingBubble } from 'components'

const MainPage = () => {
  return (
    <MainWrapper>
      <LandingBubble />
      <Button buttonType="secondary" contentType="text" text="메인 페이지야!" textColor="gray6" textSize="h3" />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default MainPage
