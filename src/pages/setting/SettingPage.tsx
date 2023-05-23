/* eslint-disable @typescript-eslint/no-unused-vars */
import SettingContent from 'components/widget/setting/SettingContent'
import SettingHeader from 'components/widget/setting/SettingHeader'
import SettingMenu from 'components/widget/setting/SettingMenu'
import useWindowSize from 'hooks/useWindowSize'
import React, { useState } from 'react'
import styled from 'styled-components'

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
        </SettingWrapper>
      ) : isMenu ? (
        <SettingWrapper>
          <SettingHeader />

          <SettingMain>
            <SettingMenu setPageNumber={setPageNumber} setIsMenu={setIsMenu} />
          </SettingMain>
        </SettingWrapper>
      ) : (
        !isMenu && (
          <SettingWrapper>
            <SettingMain>
              <SettingContent pageNumber={pageNumber} setIsMenu={setIsMenu} />
            </SettingMain>
          </SettingWrapper>
        )
      )}
    </>
  )
}

const SettingWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.side.side100};

  @media all and (max-width: 767px) {
    position: relative;
  }
`

const SettingMain = styled.div`
  display: flex;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default SettingPage
