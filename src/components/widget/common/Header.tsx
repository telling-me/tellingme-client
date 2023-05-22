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
  background-color: ${({ theme }) => theme.colors.side.side100};
  transition: 0.3s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 60px 12px;
  }

  @media all and (max-width: 767px) {
    padding: 20px 21px 12px 25px;
  }
`

export default Header