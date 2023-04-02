import React from 'react'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'
import { CoreButton } from 'components'

const LandingHeader = () => {
  return (
    <HeaderWrapper>
      <style.TextH1>Telling Me</style.TextH1>
      <CoreButton size="default" styleType="filled" text="세팅" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 320px;
`

export default LandingHeader
