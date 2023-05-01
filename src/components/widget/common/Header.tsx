import React from 'react'
import styled from 'styled-components'

// components
import { Button } from 'components/core'

// assets
import Icons from 'assets/icons'
import ContinuousDate from '../main/ContinuousDate'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <>
      <HeaderWrapper>
        <Icons.Logo />
        <Button icon="setting" contentType="icon" buttonType="noFilled" iconColor="gray6" iconSize="small" />
      </HeaderWrapper>
      {location.pathname.includes('/app/main') && <ContinuousDate />}
    </>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  ${({ theme }) => theme.common.flexBetween}
  padding: 20px 12px;
`

export default Header
