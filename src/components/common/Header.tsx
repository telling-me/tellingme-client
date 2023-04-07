import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// components
import { Button } from 'components'

const Header = () => {
  return (
    <HeaderWrapper>
      <style.TextH1>Telling Me</style.TextH1>
      <Button buttonType="primary" contentType="text" textSize="h6" textColor="error400" text="세팅" _padding="15px" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
`

export default Header
