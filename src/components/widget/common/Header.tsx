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
  padding: 20px 0 12px 0;
  position: absolute;
`

export default Header
