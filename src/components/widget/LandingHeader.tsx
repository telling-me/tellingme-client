import React from 'react'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'
import { Button } from 'components'

const LandingHeader = () => {
  return (
    <HeaderWrapper>
      <style.TextH1>Telling Me</style.TextH1>
      <Button buttonType="primary" contentType="text" textSize="h6" textColor="error400" text="세팅" _padding="15px" />
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
