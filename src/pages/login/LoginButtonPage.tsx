import React from 'react'

// config
import { KAKAO_AUTH_URL } from 'configs/kakao'

// component
import { Button } from 'components'
import styled from 'styled-components'

const LoginButtonPage = () => {
  return (
    <LoginButtonWrapper>
      <Button
        buttonType="tertiaryModified"
        contentType="text"
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
