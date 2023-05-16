import SettingHeader from 'components/widget/setting/SettingHeader'
import SettingMenu from 'components/widget/setting/SettingMenu'
import React from 'react'
import styled from 'styled-components'

const SettingPage = () => {
  return (
    <SettingWrapper>
      <SettingHeader />

      <SettingMain>
        <SettingMenu />
      </SettingMain>
    </SettingWrapper>
  )
}

const SettingWrapper = styled.div``

const SettingMain = styled.div`
  display: flex;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`

export default SettingPage
