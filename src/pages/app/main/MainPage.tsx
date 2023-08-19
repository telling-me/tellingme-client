import React, { useEffect } from 'react'
import styled from 'styled-components'

// components
import { MainBackground, Question, ContinuousDate } from 'components'

// hooks
import useSaveToken from 'hooks/useSaveToken'

const MainPage = () => {
  // RN에서 state로 전달받은 accessToken, refreshToken 저장
  const setAccessToken = (message: any) => {
    console.log(message, JSON.parse(message.data))
    useSaveToken({
      accessToken: JSON.parse(message.data).accessToken,
      refreshToken: JSON.parse(message.data).refreshToken
    })
  }

  // RN에서 state를 받는 event listener
  useEffect(() => {
    document.addEventListener('message', setAccessToken)
  }, [])

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
