// import React, { useEffect, useState } from 'react'
import React from 'react'

// type
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'
// import style from 'styles/styled-components/styled'
// import { Toggle, ToolTip } from 'components'

import SettingMenuList from './SettingMenuList'
import ServiceInfo from './ServiceInfo'

// hooks
// import { useLogoutMutation, usePostUserNotiQuery, useGetUserNotiQuery } from 'hooks'
import { useLogoutMutation } from 'hooks'

interface ISettingMenu {
  setPageNumber: Dispatch<SetStateAction<number>>
  setIsMenu?: Dispatch<SetStateAction<boolean>>
}

const SettingMenu = ({ setPageNumber, setIsMenu }: ISettingMenu) => {
  const MENU_LIST_ITEMS_TEXTS = ['내 정보 수정하기', '이용 약관', '개인정보 처리방침', 'FAQ', '회원 탈퇴', '로그아웃']
  const MENU_LIST_ITEMS_ICON = [true, true, true, true, true, false]

  // const [userNoti, setUserNoti] = useState(false)
  // const resNoti = useGetUserNotiQuery().data
  const { mutate: logout } = useLogoutMutation()
  // const { mutate: postUserNoti } = usePostUserNotiQuery()

  // useEffect(() => {
  //   if (resNoti != null) {
  //     setUserNoti(resNoti.data.allowNotification)
  //   }
  // }, [resNoti])

  return (
    <SettingMenuWrapper>
      {/* <PushAlarmWrapper>
        <style.TextP typo="b1" textColor="gray8">
          푸시 알림 받기
        </style.TextP>

        <ToolTip
          tooltipText="알림이 오지 않는다면 크롬 사이트|설정에서 알림을 허용해주세요"
          isError={false}
          _margin="0 0 0 4px"
        >
          <Icons.Info width="20" height="20" />
        </ToolTip>

        <Toggle
          value={userNoti}
          setValue={setUserNoti}
          _margin="0px 0px 0px auto"
          _onClick={() => {
            postUserNoti()
          }}
        />
      </PushAlarmWrapper> */}

      {MENU_LIST_ITEMS_TEXTS.map((text, i) => {
        return (
          <SettingMenuList
            key={i}
            text={text}
            icon={MENU_LIST_ITEMS_ICON[i]}
            _onClick={() => {
              if ([0, 4].includes(i)) {
                setPageNumber(i)

                if (setIsMenu != null) {
                  setIsMenu(false)
                }
              } else if (i === 1) {
                window.open('https://doana.notion.site/f42ec05972a545ce95231f8144705eae?pvs=4')
              } else if (i === 2) {
                window.open('https://doana.notion.site/7cdab221ee6d436781f930442040d556?pvs=4')
              } else if (i === 3) {
                window.open('https://doana.notion.site/f7a045872c3b4b02bce5e9f6d6cfc2d8?pvs=4')
              } else if (i === 5) {
                logout()
              }
            }}
          />
        )
      })}

      <ServiceInfo />
    </SettingMenuWrapper>
  )
}

const SettingMenuWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 64px);
  height: calc(var(--vh, 1vh) * 100 - 64px);

  @media all and (min-width: 768px) {
    max-width: 425px;
  }
`

// const PushAlarmWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   width: 100%;

//   p {
//     display: flex;
//     align-items: center;

//     height: 32px;
//   }

//   @media all and (min-width: 1200px) {
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   @media all and (min-width: 768px) {
//     padding: 18px 60px 18px 60px;
//   }

//   @media all and (max-width: 767px) {
//     padding: 14px 21px 14px 25px;
//   }
// `

export default SettingMenu
