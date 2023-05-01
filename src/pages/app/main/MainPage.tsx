import React from 'react'
import styled from 'styled-components'

// components
import { MainBackground, Question } from 'components'

const MainPage = () => {
  return (
    <MainWrapper>
      <MainBackground />
      <Question />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export default MainPage
