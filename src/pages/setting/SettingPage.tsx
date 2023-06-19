import React, { useState } from 'react'

// components
import styled from 'styled-components'
import SettingContent from 'components/widget/setting/SettingContent'
import SettingHeader from 'components/widget/setting/SettingHeader'
import SettingMenu from 'components/widget/setting/SettingMenu'

// hooks
import useWindowSize from 'hooks/useWindowSize'
import { Footer } from 'components/widget'

const SettingPage = () => {
  const [isMenu, setIsMenu] = useState(true)
  const [pageNumber, setPageNumber] = useState(0)
  const windowWidth = useWindowSize().width

  return (
    <>
      {windowWidth > 767 ? (
        <SettingWrapper>
          <SettingHeader />

          <SettingMain>
            <SettingMenu setPageNumber={setPageNumber} />
            <SettingContent pageNumber={pageNumber} />
          </SettingMain>

          <Footer />
        </SettingWrapper>
      ) : isMenu ? (
        <SettingWrapper>
          <SettingHeader />

          <SettingMain isMenu={isMenu}>
            <SettingMenu setPageNumber={setPageNumber} setIsMenu={setIsMenu} />
          </SettingMain>

          <Footer />
        </SettingWrapper>
      ) : (
        !isMenu && (
          <SettingWrapper>
            <SettingMain>
              <SettingContent pageNumber={pageNumber} setIsMenu={setIsMenu} />
            </SettingMain>

            <Footer />
          </SettingWrapper>
        )
      )}
    </>
  )
}

const SettingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.side.side100};

  width: 100%;
  height: 100vh;

  @media all and (max-width: 767px) {
    position: relative;
  }

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const SettingMain = styled.div<{ isMenu?: boolean }>`
  display: flex;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) {
    height: calc(100vh - 66px);
  }

  @media all and (max-width: 767px) {
    height: ${({ isMenu }) => (isMenu != null ? 'calc(100vh - 66px)' : '100vh')};
  }
`

export default SettingPage
