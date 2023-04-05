import React from 'react'

// config
import { KAKAO_AUTH_URL } from 'configs/kakao'

// component
import styled from 'styled-components'
import { CoreButton } from 'components/core'

const LoginButtonPage = () => {
  return (
    <LoginButtonWrapper>
      <CoreButton
        size="default"
        styleType="filled"
        text="카카오 로그인 테스트"
        _onClick={() => {
          window.location.href = KAKAO_AUTH_URL
        }}
      ></CoreButton>
    </LoginButtonWrapper>
  )
}

const LoginButtonWrapper = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`

export default LoginButtonPage
