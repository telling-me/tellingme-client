import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
// store
import useQuestionStore from 'stores/useQuestionStore'
import useCommonStore from 'stores/useCommonStore'
// components
import style from 'styles/styled-components/styled'
import { Button } from 'components/core'

const TabBar = () => {
  const location = useLocation()

  // store
  const { isWriteModalOn } = useQuestionStore()
  const { setPrevPage, setCurrPage } = useCommonStore()

  useEffect(() => {
    setPrevPage(location.pathname.includes('allanswer') ? -1 : location.pathname.includes('main') ? 0 : 1)
  }, [location])

  // 질문 작성 시 TabBar 노출 여부
  if (location.pathname.includes('main') && isWriteModalOn) return null
  return (
    <TabBarWrapper size={window.innerWidth}>
      {/* Desktop 버전에만 필요 */}
      <TabButtonWrapper>
        <Link
          to="#"
          // to="/app/allanswer"
        >
          <TabButton
            color={location.pathname.includes('allanswer') ? 'logo' : 'noFilled'}
            onClick={() => {
              setCurrPage(-1)
            }}
          />
        </Link>
        <Link to="/app/main">
          <TabButton
            color={location.pathname.includes('main') ? 'logo' : 'noFilled'}
            onClick={() => {
              setCurrPage(0)
            }}
          />
        </Link>
        <Link to="/app/myanswer">
          <TabButton
            color={location.pathname.includes('myanswer') ? 'logo' : 'noFilled'}
            onClick={() => {
              setCurrPage(1)
            }}
          />
        </Link>
      </TabButtonWrapper>
      <TabBarWrapperDiv>
        <TabWrapperLi>
          <ul>
            <TabWrapper>
              <Link
                to="#"
                // to="/app/allanswer"
              >
                {/* TODO: 1차 배포 후 수정피요 */}
                <Button
                  _width="41px"
                  _height="41px"
                  icon="briefcase"
                  buttonType={location.pathname.includes('allanswer') ? 'logo' : 'noFilled'}
                  contentType="icon"
                  iconColor={location.pathname.includes('allanswer') ? 'side100' : 'gray1'}
                  iconSize="medium"
                  _onClick={() => {
                    setCurrPage(-1)
                  }}
                  _disabled={true}
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
                  _onClick={() => {
                    setCurrPage(0)
                  }}
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
                  _onClick={() => {
                    setCurrPage(1)
                  }}
                />
              </Link>
            </TabWrapper>
          </ul>
        </TabWrapperLi>
      </TabBarWrapperDiv>
    </TabBarWrapper>
  )
}

const TabBarWrapper = styled.nav<{ size: number }>`
  position: absolute;
  z-index: 4000;
  right: ${({ size }) => (size > 1230 ? `${size - (size - 1200) / 2 - 1200}px` : `30px`)};
  top: calc(50% - 145px);
  ${({ theme }) => theme.common.flexStart};
  gap: 36px;
  transition: 0.3s;

  @media screen and (max-width: 1023px) {
    top: auto;
    right: auto;
    bottom: 36px;
  }

  @media all and (max-width: 767px) {
    bottom: 0;
    width: 100%;
  }
`

const TabBarWrapperDiv = styled.div`
  width: 100%;
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
  width: max-content;
  padding: 0 16px;
  transition: 0.3s;

  @media screen and (max-width: 1023px) {
    flex-direction: row;
    height: 77px;
    gap: 70px;
    padding: 0 32px;
  }

  @media all and (max-width: 767px) {
    justify-content: space-evenly;
    border-radius: 24px 24px 0 0;
    width: 100%;
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
  transition: 0.2s;

  @media screen and (max-width: 1023px) {
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
