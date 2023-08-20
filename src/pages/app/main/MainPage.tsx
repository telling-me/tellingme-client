import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import { QueryClient } from 'react-query'

// components
import { MainBackground, Question, ContinuousDate } from 'components'

// hooks
import useSaveToken from 'hooks/useSaveToken'

const MainPage = () => {
  // RN에서 state로 전달받은 accessToken, refreshToken 저장
  const [test, setTest] = useState('before')
  const setAccessToken = (message: any) => {
    const data = JSON.parse(message.data)

    if (data?.accessToken !== undefined && data?.accessToken !== null) {
      // token 저장 후 다시 query 실행
      useSaveToken({
        accessToken: JSON.parse(message.data).accessToken,
        refreshToken: JSON.parse(message.data).refreshToken
      })
    } else {
      // state 변경하면서 query 다시 실행
      setTest('refresh')
      console.log(test)
    }
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
