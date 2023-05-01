import { Button } from 'components/core'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'

const TabBar = () => {
  const location = useLocation()
  return (
    <TabBarWrapper>
      <TabButtonWrapper>
        <TabButton color={location.pathname.includes('allanswer') ? 'logo' : 'noFilled'} />
        <TabButton color={location.pathname.includes('main') ? 'logo' : 'noFilled'} />
        <TabButton color={location.pathname.includes('myanswer') ? 'logo' : 'noFilled'} />
      </TabButtonWrapper>
      <TabBarWrapperDiv>
        <TabWrapperLi>
          <ul>
            <TabWrapper>
              <Link to="/app/allanswer">
                <Button
                  _width="41px"
                  _height="41px"
                  icon="briefcase"
                  buttonType={location.pathname.includes('allanswer') ? 'logo' : 'noFilled'}
                  contentType="icon"
                  iconColor={location.pathname.includes('allanswer') ? 'side100' : 'gray3'}
                  iconSize="medium"
                />
              </Link>
            </TabWrapper>
          </ul>
          <ul>
            <TabWrapper>
              <Link to="/app/main">
                <Button
                  _width="41px"
                  _height="41px"
                  icon="bagpack"
                  buttonType={location.pathname.includes('main') ? 'logo' : 'noFilled'}
                  contentType="icon"
                  iconColor={location.pathname.includes('main') ? 'side100' : 'gray3'}
                  iconSize="medium"
                />
              </Link>
            </TabWrapper>
          </ul>
          <ul>
            <TabWrapper>
              <Link to="/app/myanswer">
                <Button
                  _width="41px"
                  _height="41px"
                  icon="handshake"
                  buttonType={location.pathname.includes('myanswer') ? 'logo' : 'noFilled'}
                  contentType="icon"
                  iconColor={location.pathname.includes('myanswer') ? 'side100' : 'gray3'}
                  iconSize="medium"
                />
              </Link>
            </TabWrapper>
          </ul>
        </TabWrapperLi>
      </TabBarWrapperDiv>
    </TabBarWrapper>
  )
}

const TabBarWrapper = styled.nav`
  position: absolute;
  z-index: 5000;
  right: 30px;
  top: calc(50% - 145px);
  ${({ theme }) => theme.common.flexStart};
  gap: 36px;

  @media screen and (max-width: 768px) {
    top: auto;
    right: auto;
    bottom: 36px;
  }
`

const TabBarWrapperDiv = styled.div`
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`

const TabWrapperLi = styled.li`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  gap: 48px;

  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 24px;
  height: 291px;
  width: 73px;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    width: 325px;
    height: 77px;
  }
`

const TabWrapper = styled(style.Grid)`
  button {
    border-radius: 14px;
  }
`
const TabButtonWrapper = styled(style.Grid)`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const TabButton = styled(style.Grid)<{ color: 'logo' | 'noFilled' }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  ${({ color, theme }) =>
    color === 'logo'
      ? `background-color: ${theme.colors.logo}`
      : `background-color: ${theme.colors.gray.gray3 as string}`};
`
export default TabBar
