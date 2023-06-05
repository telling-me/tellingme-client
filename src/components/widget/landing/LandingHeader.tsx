import React, { useState } from 'react'

// components
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, LoginModal } from 'components'

// assets
import Icons from 'assets/icons'

const LandingHeader = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Icons.Logo width={81} fill={theme.colors.logo} />

      <Button
        buttonType="secondary"
        textSize="h6"
        textColor="logo"
        text="시작하기"
        _padding="18px 36px"
        _onClick={() => {
          setOpen(true)
        }}
      />
      {open && <LoginModal setOpen={setOpen} />}
    </HeaderWrapper>
  )
}

const { Grid } = style

const HeaderWrapper = styled(Grid)`
  z-index: 9000;
  position: absolute;
  top: 0;

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

export default LandingHeader
