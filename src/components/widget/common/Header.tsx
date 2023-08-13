import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// components
import styled, { useTheme } from 'styled-components'
import { IconButton } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// styles
import style from 'styles/styled-components/styled'

const Header = () => {
  const theme = useTheme()
  const location = useLocation()
  const navigate = useNavigate()

  const PAGE_URL = window.location.href

  if (location.pathname.includes('setting')) {
    return <></>
  }

  return (
    <>
      {PAGE_URL.includes('main') ? (
        <HeaderWrapper>
          <Icons.Logo
            width={81}
            fill={theme.colors.logo}
            onClick={() => {
              window.location.href = '/app/main'
            }}
          />

          <IconButton
            buttonType="noFilled"
            _width="fit-content"
            _height="fit-content"
            _onClick={() => {
              navigate('setting')
            }}
          >
            <Icons.Setting width="24" height="24" stroke={useChangeColor('gray6')} />
          </IconButton>
        </HeaderWrapper>
      ) : (
        <HeaderWrapper style={{ justifyContent: 'center', padding: '26.5px 0 20.5px 0' }}>
          <style.TextP typo="h6_b" textColor="gray6">
            나의 공간
          </style.TextP>
        </HeaderWrapper>
      )}
    </>
  )
}

const HeaderWrapper = styled.header`
  ${({ theme }) => theme.common.flexBetween}

  width: 100%;
  max-width: 1320px;
  padding: 20px 60px 12px;
  position: absolute;
  background-color: transparent;
  transition: 0.3s;

  z-index: 1;

  svg {
    cursor: pointer;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 60px 12px;
  }

  @media all and (max-width: 767px) {
    padding: 20px 21px 12px 25px;
  }
`

export default Header
