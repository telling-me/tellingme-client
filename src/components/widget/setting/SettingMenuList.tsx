import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Icon } from 'components'

interface ISettingMenuList {
  text: string
  icon?: boolean
  _onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SettingMenuList = ({ text, icon = true, _onClick }: ISettingMenuList) => {
  return (
    <SettingMenuListWrapper onClick={_onClick}>
      <style.TextP typo="b1" textColor="gray8">
        {text}
      </style.TextP>

      {icon && <Icon icon="caretright" iconSize="medium" iconColor="gray6" _margin="0px 0px 0px auto" />}
    </SettingMenuListWrapper>
  )
}

const SettingMenuListWrapper = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 60px

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.side.side200};
  }

  p {
    display: flex;
    align-items: center;
    
    height: 32px;
  }

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 60px 18px 60px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 18px 60px 18px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 14px 21px 14px 25px;
  }
`

export default SettingMenuList
