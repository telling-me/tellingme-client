import React from 'react'

// hooks
import { useUnsubscribeNewsLetterMutation } from 'hooks'

// assets
import Icons from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

// components
import { Button } from 'components/core'

const NewsLetterUnsubscribePage = () => {
  const theme = useTheme()
  const email = new URLSearchParams(window.location.search).get('email')
  const { mutate: unsubscribeMutate } = useUnsubscribeNewsLetterMutation()

  return (
    <MainWrapper>
      <Icons.Logo width="136" height="57" fill={theme.colors.logo} />
      <TextWrapper>
        <TextP typo="h6_b" textColor="gray7">
          텔링미 소식 구독
        </TextP>
        <TextP typo="h6_b" textColor="gray7">
          수신을 거부하시겠어요?
        </TextP>
      </TextWrapper>
      <Grid flex="center" _gap="16px">
        <Button
          buttonType="tertiary"
          text="아니요"
          textSize="h6"
          textColor="logo"
          _padding="18px 32px"
          _onClick={() => {
            window.location.href = '/'
          }}
        />
        <Button
          buttonType="secondary"
          text="그만 받을래요"
          textSize="h6"
          textColor="logo"
          _padding="18px 32px"
          _onClick={() => {
            unsubscribeMutate(
              { email: email as string },
              {
                onSuccess: () => {
                  window.location.href = '/newsletter/unsubscribe/complete'
                }
              }
            )
          }}
        />
      </Grid>
    </MainWrapper>
  )
}

const { TextP, Grid } = style

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

export default NewsLetterUnsubscribePage
