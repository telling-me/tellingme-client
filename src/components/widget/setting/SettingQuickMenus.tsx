import React from 'react'
import styled from 'styled-components'

// assets
import Icon from 'assets/icons'

// styles
import style from 'styles/styled-components/styled'

const SettingQuickMenus = () => {
  const MENUS = [
    { icon: Icon.Premium, title: '프리미엄' },
    { icon: Icon.TellingmeBook, title: '텔링미북' },
    { icon: Icon.QnA, title: 'FAQ' },
    { icon: Icon.MyInfo, title: '내 정보' }
  ]

  return (
    <QuickMenusSpace>
      <QuickMenusWrapper>
        {MENUS.map((v, i) => {
          return (
            <QuickMenuWrapper key={i}>
              <v.icon />
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
    margin-top: 36px;
    padding: 0 60px;
  }

  @media all and (max-width: 768px) {
    margin: 20px 0 24px 0;
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
