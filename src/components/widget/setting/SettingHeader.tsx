import React from 'react'

// component
import { Icon } from 'components'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const SettingHeader = () => {
  return (
    <SettingHeaderWrapper>
      <BackButton
        onClick={() => {
          window.location.href = '/app/main'
        }}
      >
        <Icon icon="arrowleft" iconSize="medium" iconColor="gray6" />
      </BackButton>

      <style.TextP typo="h6_b" textColor="gray6" _margin="0px auto 0px 0px">
        설정
      </style.TextP>
    </SettingHeaderWrapper>
  )
}

const SettingHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 64px;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0px 12px 0px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 60px 12px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 20px 25px 12px 25px;
  }
`

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  margin-right: calc(50% - 45px);

  cursor: pointer;
`

export default SettingHeader
