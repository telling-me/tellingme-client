import React from 'react'
import styled from 'styled-components'

// components
import { MainBackground, Question, ContinuousDate } from 'components'

const MainPage = () => {
  return (
    <MainWrapper>
      <ContinuousDate />
      <MainBackground />
      <Question />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
`

export default MainPage
