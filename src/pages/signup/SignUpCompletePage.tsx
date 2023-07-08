import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import style from 'styles/styled-components/styled'
import styled from 'styled-components'
import { Button, LoginModal } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'

const SignUpCompletePage = () => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  return (
    <SignUpCompleteWrapper>
      <SignUpCompleteHeader>
        <Icons.Logo width="81" height="34" fill={useChangeColor('logo')} />
      </SignUpCompleteHeader>

      <SignUpCompleteContent>
        <style.TextP typo="h4" textColor="black">
          회원 가입이 완료되었어요!
        </style.TextP>

        <Icons.SignUpSuccessDuei />

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
              setOpen(true)
            }}
          />
        </SignUpCompleteButtonWrapper>
      </SignUpCompleteContent>

      {open && <LoginModal setOpen={setOpen} />}
    </SignUpCompleteWrapper>
  )
}

const SignUpCompleteWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 60px;
  }

  @media all and (max-width: 767px) {
    padding: 0 21px 0 25px;
  }
`

const SignUpCompleteHeader = styled.div`
  width: 100%;
  padding: 20px 0 12px 0;
`

const SignUpCompleteContent = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 103px;

  width: 100%;
  height: calc(100vh - 66px);
  height: calc(var(--vh, 1vh) * 100 - 66px);
`

const SignUpCompleteButtonWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  gap: 15px;
`

export default SignUpCompletePage
