import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// store
import useCommonStore from 'stores/useCommonStore'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { IconButton } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'
import useLibraryStore from 'stores/useLibraryStore'
import { getCookie } from 'utils/cookies'

const TAB_DATA = [
  {
    name: 'main',
    link: '/app/main',
    icon: Icons.Home,
    page_idx: 0,
    mobile_only: false
  },
  {
    name: 'myanswer',
    link: '/app/myanswer',
    icon: Icons.MyAnswer,
    page_idx: 1,
    mobile_only: false
  },
  {
    name: 'mylibrary',
    link: '/app/mylibrary',
    icon: Icons.MyLibrary,
    page_idx: 2,
    mobile_only: true
  },
  {
    name: 'allanswer',
    link: '/app/allanswer',
    icon: Icons.AllAnswer,
    page_idx: 3,
    mobile_only: false
  }
]

const TabBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // store
  const { setPrevPage, setCurrPage, setMobileOnlyModal } = useCommonStore()
  const { helpModalOn } = useLibraryStore()

  useEffect(() => {
    const prevPage = TAB_DATA?.find((tab) => location.pathname.includes(`${tab.name}`))
    setPrevPage(prevPage?.page_idx ?? 0)
  }, [location])

  // 질문 작성 시 TabBar 노출 여부
  // 나의 서재 - help 클릭 시 노출 여부
  if (
    (location.pathname.includes('app') && new URLSearchParams(window.location.search).get('date') != null) ||
    location.pathname.includes('setting') ||
    helpModalOn
  )
    return null

  return (
    <TabBarWrapper size={window.innerWidth}>
      {/* Desktop 버전에만 필요 */}
      <TabButtonWrapper>
        {TAB_DATA.map((tab, idx) => {
          if (tab.mobile_only)
            return (
              <TabButton
                key={idx}
                color={location.pathname.includes(`${tab.name}`) ? 'logo' : 'noFilled'}
                onClick={() => {
                  if (getCookie('device') === 'android') {
                    setCurrPage(tab.page_idx)
                    navigate(`${tab.link}`)
                  } else setMobileOnlyModal(true)
                }}
              />
            )
          else
            return (
              <Link to={`${tab.link}`} key={idx}>
                <TabButton
                  color={location.pathname.includes(`${tab.name}`) ? 'logo' : 'noFilled'}
                  onClick={() => {
                    setCurrPage(tab.page_idx)
                  }}
                />
              </Link>
            )
        })}
      </TabButtonWrapper>
      <TabBarWrapperDiv>
        <TabWrapperLi>
          {TAB_DATA.map((tab, idx) => {
            if (tab.mobile_only)
              return (
                <ul key={idx}>
                  <TabWrapper>
                    <IconButton
                      buttonType={location.pathname.includes(`${tab.name}`) ? 'logo' : 'noFilled'}
                      _width="41px"
                      _height="41px"
                      _onClick={() => {
                        if (getCookie('device') === 'android') {
                          setCurrPage(tab.page_idx)
                          navigate(`${tab.link}`)
                        } else setMobileOnlyModal(true)
                      }}
                    >
                      <tab.icon
                        width="24"
                        height="24"
                        stroke={useChangeColor(location.pathname.includes(`${tab.name}`) ? 'side100' : 'gray3')}
                      />
                    </IconButton>
                  </TabWrapper>
                </ul>
              )
            return (
              <ul key={idx}>
                <TabWrapper>
                  <Link to={`${tab.link}`}>
                    <IconButton
                      buttonType={location.pathname.includes(`${tab.name}`) ? 'logo' : 'noFilled'}
                      _width="41px"
                      _height="41px"
                      _onClick={() => {
                        setCurrPage(tab.page_idx)
                      }}
                    >
                      <tab.icon
                        width="24"
                        height="24"
                        stroke={useChangeColor(location.pathname.includes(`${tab.name}`) ? 'side100' : 'gray3')}
                      />
                    </IconButton>
                  </Link>
                </TabWrapper>
              </ul>
            )
          })}
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
  height: max-content;
  width: max-content;
  padding: 32px 16px;
  transition: 0.3s;

  @media screen and (max-width: 1023px) {
    flex-direction: row;
    height: 77px;
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
