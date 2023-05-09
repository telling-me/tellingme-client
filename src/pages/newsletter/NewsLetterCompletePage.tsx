import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import Icons from 'assets/icons'

const NewsLetterCompletePage = () => {
  return (
    <MainWrapper>
      <Icons.Logo width="136" height="57" />

      <TextWrapper>
        <style.TextP typo="h6_b" textColor="gray7">
          알려주신 이메일 주소로
        </style.TextP>
        <style.TextP typo="h6_b" textColor="gray7">
          텔링미 메일이 발송되었어요
        </style.TextP>
      </TextWrapper>

      <style.TextP typo="b1" textColor="gray8">
        서비스가 출시되면 가장 먼저 알려드릴게요!
      </style.TextP>
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100vh;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export default NewsLetterCompletePage
