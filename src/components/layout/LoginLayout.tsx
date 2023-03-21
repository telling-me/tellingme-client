import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const LoginLayout = () => {
  return (
    <Background>
      <LoginBox>
        <TitleGroup>
          <Title>TELLING ME</Title>
          <TitleDesc>텔링미 로그인</TitleDesc>
        </TitleGroup>

        <Outlet />
      </LoginBox>
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.gradient.default_gradient()};

  ${({ theme }) => theme.common.flexCenter};
`

const LoginBox = styled.div`
  width: 400px;
  height: max-content;

  ${({ theme }) => theme.common.flexStart};
  flex-direction: column;
  gap: 32px;
`

const TitleGroup = styled.hgroup`
  color: ${({ theme }) => theme.colors.text.black};

  ${({ theme }) => theme.common.flexStart};
  flex-direction: column;
`
const Title = styled.h1`
  ${({ theme }) => theme.typo.title.h1};
`
const TitleDesc = styled.h2`
  ${({ theme }) => theme.typo.body.b1_b};
`

export default LoginLayout
