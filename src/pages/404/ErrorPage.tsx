import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components'

// assets
import Icons from 'assets/icons'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <ErrorWrapper>
      <Icons.Error404 width="120" height="120" />

      <style.TextP typo="h2_b" textColor="logo">
        404
      </style.TextP>

      <style.TextH1 typo="h6_b" textColor="gray8" _margin="20px 0 0 0">
        원하시는 페이지를 찾을 수 없어요.
      </style.TextH1>

      <style.TextP typo="b2" textColor="gray8" _margin="12px 0 0 0">
        방문하시려는 페이지가 잘못 입력되었거나,
      </style.TextP>

      <ErrorInfo>
        <style.TextP typo="b2" textColor="gray8">
          변경 또는 삭제되어 이용하실 수 없습니다.
        </style.TextP>
        <style.TextP typo="b2" textColor="gray8">
          주소를 다시 한번 확인 해주세요.
        </style.TextP>
      </ErrorInfo>

      <Button
        buttonType="secondary"
        text="홈으로 갈래요"
        textSize="h6"
        textColor="logo"
        _margin="24px 0 0 0"
        _padding="18px 32px"
        _onClick={() => {
          navigate('/')
        }}
      />
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  height: 100vh;
`

const ErrorInfo = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 8px;
`

export default ErrorPage
