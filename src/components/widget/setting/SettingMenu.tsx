import React, { useState } from 'react'
import styled from 'styled-components'
import SettingMenuList from './SettingMenuList'
import style from 'styles/styled-components/styled'
import { Toggle } from 'components/core'

const SettingMenu = () => {
  const MENU_LIST_ITEMS_TEXTS = ['내 정보 수정하기', '이용 약관', '개인정보 처리방침', '회원 탈퇴', '로그아웃']
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
        return <SettingMenuList key={i} text={text} icon={MENU_LIST_ITEMS_ICONS[i]} />
      })}
    </SettingMenuWrapper>
  )
}

const SettingMenuWrapper = styled.div`
  width: 100%;
  height: calc(100vh-64px);
  max-width: 425px;
`

const PushAlarmWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 60px 18px 60px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 18px 60px 18px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 18px 25px 18px 25px;
  }
`

export default SettingMenu
