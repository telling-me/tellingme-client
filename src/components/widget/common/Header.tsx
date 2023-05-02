import React from 'react'
import styled from 'styled-components'

// components
import { Button } from 'components/core'

// assets
import Icons from 'assets/icons'

const Header = () => {
  return (
    <HeaderWrapper>
      <Icons.Logo />
      <Button icon="setting" contentType="icon" buttonType="noFilled" iconColor="gray6" iconSize="small" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1200px;
  ${({ theme }) => theme.common.flexBetween}
  padding: 20px 12px;
  position: absolute;
`

export default Header
