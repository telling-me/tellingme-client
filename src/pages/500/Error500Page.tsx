import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components'

// assets
import Icons from 'assets/icons'

const Error500Page = () => {
  const navigate = useNavigate()

  return (
    <ErrorWrapper>
      <Icons.Error404 width="120" height="120" />

      <style.TextP typo="h2_b" textColor="logo">
        500
      </style.TextP>

      <style.TextH2 typo="h6_b" textColor="gray8" _margin="20px 0 0 0">
        예상하지 못한 오류가 발생했어요!
      </style.TextH2>

      <style.TextP typo="b2" textColor="gray8" _margin="12px 0 0 0">
        현재 이 서비스가 정상적으로
      </style.TextP>

      <ErrorInfo>
        <style.TextP typo="b2" textColor="gray8">
          작동할 수 있도록 열심히 노력중이에요.
        </style.TextP>
        <style.TextP typo="b2" textColor="gray8">
          잠시 후 다시 방문해주세요.
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
          navigate('/app/main')
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

export default Error500Page
