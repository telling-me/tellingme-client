import React, { useState } from 'react'

// type
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Toggle } from 'components'

import SettingMenuList from './SettingMenuList'
import ServiceInfo from './ServiceInfo'

interface ISettingMenu {
  setPageNumber: Dispatch<SetStateAction<number>>
  setIsMenu?: Dispatch<SetStateAction<boolean>>
}

const SettingMenu = ({ setPageNumber, setIsMenu }: ISettingMenu) => {
  const MENU_LIST_ITEMS_TEXTS = ['내 정보 수정하기', '이용 약관', '개인정보 처리방침', '회원 탈퇴']
  const MENU_LIST_ITEMS_ICONS = [true, true, true, true, false]

  const [acceptPush, setAcceptPush] = useState(false)

  return (
    <SettingMenuWrapper>
      <PushAlarmWrapper>
        <style.TextP typo="b1" textColor="gray8">
          푸시 알림 받기
        </style.TextP>

        <Toggle value={acceptPush} setValue={setAcceptPush} _margin="0px 0px 0px auto" />
      </PushAlarmWrapper>

      {MENU_LIST_ITEMS_TEXTS.map((text, i) => {
        return (
          <SettingMenuList
            key={i}
            text={text}
            icon={MENU_LIST_ITEMS_ICONS[i]}
            _onClick={() => {
              setPageNumber(i)

              if (setIsMenu != null) {
                setIsMenu(false)
              }
            }}
          />
        )
      })}

      <SettingMenuList text="로그아웃" icon={false} _onClick={() => {}} />

      <ServiceInfo />
    </SettingMenuWrapper>
  )
}

const SettingMenuWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  height: calc(100vh-64px);

  @media all and (min-width: 768px) {
    max-width: 425px;
  }
`

const PushAlarmWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  p {
    display: flex;
    align-items: center;

    height: 32px;
  }

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) {
    padding: 18px 60px 18px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 14px 21px 14px 25px;
  }
`

export default SettingMenu
