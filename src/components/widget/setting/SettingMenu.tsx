// import React, { useEffect, useState } from 'react'
import React from 'react'

// type
import type { ISettingMenu } from './type'

// component
import styled from 'styled-components'
import { SettingQuickMenus, SettingMenuList, ServiceInfo } from 'components'
// import style from 'styles/styled-components/styled'
// import { Toggle, ToolTip } from 'components'

// hooks
// import { useLogoutMutation, usePostUserNotiQuery, useGetUserNotiQuery } from 'hooks'
import { useLogoutMutation } from 'hooks'
import SettingProfile from './SettingProfile'
import { getCookie } from 'utils/cookies'
import { useNavigate } from 'react-router-dom'

// data
import { EMAIL_DATA } from './data'

const SettingMenu = ({ setPageNumber, setIsMenu }: ISettingMenu) => {
  const navigate = useNavigate()

  const MENU_LIST = [
    {
      text: '이용 약관',
      icon: true,
      _onClick: () => {
        window.open('https://doana.notion.site/f42ec05972a545ce95231f8144705eae?pvs=4')
      }
    },
    {
      text: '개인정보 처리방침',
      icon: true,
      _onClick: () => {
        window.open('https://doana.notion.site/7cdab221ee6d436781f930442040d556?pvs=4')
      }
    },
    {
      text: '고객 센터',
      icon: true,
      _onClick: (e: any) => {
        location.href = EMAIL_DATA
      }
    },
    {
      text: '듀이의 질문 제작소',
      icon: true,
      _onClick: () => {
        window.open('https://tally.so/r/3Nlvlp')
      }
    },
    {
      text: '로그아웃',
      icon: false,
      _onClick: () => {
        if (!getCookie('accessToken')) navigate('/')
        else logout()
      }
    }
  ]

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
        <TextP typo="b1" textColor="gray8">
          푸시 알림 받기
        </TextP>

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

      <SettingProfile />

      <SettingQuickMenus setPageNumber={setPageNumber} setIsMenu={setIsMenu} />

      {MENU_LIST.map((menu, i) => {
        return <SettingMenuList key={i} text={menu.text} icon={menu.icon} _onClick={menu._onClick} />
      })}

      <ServiceInfo />
    </SettingMenuWrapper>
  )
}

const SettingMenuWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 64px);

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

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
