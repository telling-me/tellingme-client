import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { CoreButton } from 'components'

const Header = () => {
  return (
    <HeaderWrapper>
      <style.TextH1>Telling Me</style.TextH1>
      <CoreButton size="default" styleType="filled" text="세팅" />
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
