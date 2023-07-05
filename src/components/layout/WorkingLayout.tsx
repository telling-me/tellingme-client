import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'

const WorkingLayout = () => {
  const navigate = useNavigate()

  return (
    <WorkingLayoutWrapper>
      <Icons.Logo width="137" height="57" fill={useChangeColor('logo')} />

      <style.TextP typo="h6_b" textColor="gray7" _margin="16px 0">
        아직 서비스 출시 준비중이에요
      </style.TextP>

      <style.TextP typo="b1" textColor="gray8" _margin="0 0 4px 0">
        텔링미 소식을 구독하시면
      </style.TextP>

      <style.TextP typo="b1" textColor="gray8">
        가장 먼저 출시 알림을 받아보실 수 있어요!
      </style.TextP>

      <ButtonWrapper>
        <Button
          buttonType="tertiary"
          text="메인으로"
          textColor="logo"
          textSize="h6"
          _padding="18px 32px"
          _onClick={() => {
            navigate('/')
          }}
        />
        <Button
          buttonType="secondary"
          text="텔링미 소식 구독하기"
          textColor="logo"
          textSize="h6"
          _padding="18px 32px"
          _onClick={() => {
            navigate('/newsletter')
          }}
        />
      </ButtonWrapper>
    </WorkingLayoutWrapper>
  )
}

const WorkingLayoutWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  height: 100vh;
`

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  gap: 15px;

  margin-top: 24px;
`

export default WorkingLayout
