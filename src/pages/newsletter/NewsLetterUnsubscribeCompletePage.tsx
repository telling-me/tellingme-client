import React from 'react'

// assets
import Icons from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

const NewsLetterUnsubscribeCompletePage = () => {
  const theme = useTheme()
  return (
    <MainWrapper>
      <Icons.Logo width="136" height="57" fill={theme.colors.logo} />
      <TextWrapper>
        <TextP typo="h6_b" textColor="gray7">
          텔링미 소식 구독
        </TextP>
        <TextP typo="h6_b" textColor="gray7">
          수신 거부가 완료되었어요!
        </TextP>
      </TextWrapper>
    </MainWrapper>
  )
}

const { TextP } = style

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export default NewsLetterUnsubscribeCompletePage
