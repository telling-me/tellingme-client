import React from 'react'

// config
import { KAKAO_AUTH_URL } from 'configs/kakao'

// component
import styled from 'styled-components'
import { Button } from 'components'

const LoginButtonPage = () => {
  return (
    <LoginButtonWrapper>
      <Button
        buttonType="tertiary"
        text="카카오 로그인 테스트"
        textColor="primary800"
        textSize="h2"
        _onClick={() => {
          window.location.href = KAKAO_AUTH_URL
        }}
      />
    </LoginButtonWrapper>
  )
}

const LoginButtonWrapper = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`

export default LoginButtonPage
