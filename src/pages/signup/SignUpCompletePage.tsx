import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import style from 'styles/styled-components/styled'
import styled from 'styled-components'
import { Button } from 'components'

const SignUpCompletePage = () => {
  const navigate = useNavigate()

  return (
    <SignUpCompleteWrapper>
      <style.TextP typo="h4" textColor="black">
        회원 가입이 완료되었어요!
      </style.TextP>

      {
        // 후에 캐릭터 추가
      }

      <SignUpCompleteButtonWrapper>
        <Button
          buttonType="tertiary"
          text="메인으로"
          textSize="h6"
          textColor="logo"
          _padding="18px 32px"
          _onClick={() => {
            navigate('/')
          }}
        />
        <Button
          buttonType="secondary"
          text="로그인할래요"
          textSize="h6"
          textColor="logo"
          _padding="18px 32px"
          _onClick={() => {
            navigate('/login')
          }}
        />
      </SignUpCompleteButtonWrapper>
    </SignUpCompleteWrapper>
  )
}

const SignUpCompleteWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 103px;

  height: 100vh;
`

const SignUpCompleteButtonWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  gap: 15px;
`

export default SignUpCompletePage
