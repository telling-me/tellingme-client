import React from 'react'
import styled from 'styled-components'

// assets
import Icon from 'assets/icons'

// styles
import style from 'styles/styled-components/styled'

// type
import type { ISettingMenu } from './type'

const SettingQuickMenus = ({ setPageNumber, setIsMenu }: ISettingMenu) => {
  const MENUS = [
    { icon: Icon.Premium, title: '프리미엄', _onClick: () => {} },
    { icon: Icon.TellingmeBook, title: '텔링미북', _onClick: () => {} },
    {
      icon: Icon.QnA,
      title: 'FAQ',
      _onClick: () => {
        window.open('https://doana.notion.site/f7a045872c3b4b02bce5e9f6d6cfc2d8?pvs=4')
      }
    },
    {
      icon: Icon.MyInfo,
      title: '내 정보',
      _onClick: () => {
        setPageNumber(0)

        if (setIsMenu != null) {
          setIsMenu(false)
        }
      }
    }
  ]

  return (
    <QuickMenusSpace>
      <QuickMenusWrapper>
        {MENUS.map((v, i) => {
          return (
            <QuickMenuWrapper key={i} onClick={v._onClick}>
              <v.icon width="32" height="32" />
              <style.TextP typo="c" textColor="gray7">
                {v.title}
              </style.TextP>
            </QuickMenuWrapper>
          )
        })}
      </QuickMenusWrapper>
    </QuickMenusSpace>
  )
}

const QuickMenusSpace = styled.div`
  width: 100%;

  @media all and (min-width: 768px) {
    margin: 12px 0 36px;
    padding: 0 60px;
  }

  @media all and (max-width: 768px) {
    margin: 20px 0 24px;
    padding: 0 25px;
  }
`

const QuickMenusWrapper = styled.div`
  ${({ theme }) => theme.common.flexBetween}
  flex-wrap: wrap;

  width: 100%;
  padding: 20px 30.5px;

  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 20px;

  @media all and (min-width: 768px) {
    padding: 5px 30.5px;
  }
`

const QuickMenuWrapper = styled.button`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 8px;

  cursor: pointer;

  @media all and (min-width: 768px) {
    width: 50%;
    margin: 15px 0;
  }
`
export default SettingQuickMenus
