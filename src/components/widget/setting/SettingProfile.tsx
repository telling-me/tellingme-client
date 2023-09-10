import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// hooks
import { useGetMyPage, useWindowSize } from 'hooks'

// styles
import style from 'styles/styled-components/styled'
import Icon from 'assets/icons'

interface IMyPage {
  nickname: string
  profileUrl: string
  answerRecord: number
  isPremium: boolean
  allowNotification: null | boolean
}

const SettingProfile = () => {
  const [mypage, setMypage] = useState<IMyPage>({
    nickname: '',
    profileUrl: '',
    answerRecord: 0,
    isPremium: false,
    allowNotification: null
  })

  const res = useGetMyPage().data
  const windowWidth = useWindowSize().width

  useEffect(() => {
    if (res != null) {
      setMypage(res.data)
    }
  }, [res])

  return (
    <ProfileSpace>
      <ImageWrapper src={mypage.profileUrl} decoding="async" />

      <TextWrapper>
        <style.TextP typo="h5" textColor="black">
          {mypage.nickname} 님
        </style.TextP>

        {windowWidth < 768 ? (
          <RecordWrapper>
            <style.TextP typo="c_b" textColor="gray6">
              {mypage.answerRecord === 0 ? '오늘도' : '연속'}&nbsp;
            </style.TextP>
            <style.TextP typo="c_b" textColor="logo">
              {mypage.answerRecord === 0 ? '진정한 나' : '1'}
            </style.TextP>
            <style.TextP typo="c_b" textColor="gray6">
              {mypage.answerRecord === 0 ? '를 만나봐요!' : '일째 답변 중!'}
            </style.TextP>
          </RecordWrapper>
        ) : (
          mypage.isPremium && (
            <MembershipWrapper>
              <Icon.Premium width="16" height="16" />
              <style.TextP typo="c" textColor="logo">
                Premium
              </style.TextP>
            </MembershipWrapper>
          )
        )}
      </TextWrapper>

      {windowWidth < 768 && mypage.isPremium && (
        <MembershipWrapper>
          <Icon.Premium width="16" height="16" />
          <style.TextP typo="c" textColor="logo">
            Premium
          </style.TextP>
        </MembershipWrapper>
      )}
    </ProfileSpace>
  )
}

const ProfileSpace = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  @media all and (min-width: 768px) {
    flex-direction: column;
  }

  @media all and (max-width: 768px) {
    margin-top: 8px;
    padding: 0 25px;
  }
`

const ImageWrapper = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 100%;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    align-items: center;

    width: 100%;
    margin-top: 8px;
  }

  @media all and (max-width: 768px) {
    margin-left: 12px;
  }
`

const RecordWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`

const MembershipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  width: fit-content;
  padding: 4px 8px;

  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors.primary.primary25};

  @media all and (min-width: 768px) {
    margin: 4px 0 0;
  }

  @media all and (max-width: 768px) {
    margin: 0 0 0 auto;
  }
`

export default SettingProfile
