import React, { useEffect, useState } from 'react'

// hooks
import { useGetReportList, useExpireReport } from 'hooks'

// utils
import { getCookie } from 'utils/cookies'

// components
import { Button, Hr, Loading, TwoButtonModal } from 'components'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// assets
import Icons from 'assets/icons'

const AdminReportPage = () => {
  const [nowCheck, setNowCheck] = useState<any>()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const reportList = useGetReportList().data?.data
  const { mutate: expireReport } = useExpireReport()

  const isLogin =
    getCookie(`${process.env.REACT_APP_ADMIN_COOKIE as string}`) === process.env.REACT_APP_ADMIN_COOKIE_VALUE

  const _onClick = () => {
    expireReport({ answerIds: `${nowCheck.answerId as string}` })
  }

  useEffect(() => {
    if (reportList != null) {
      if (reportList.length > 0) {
        setNowCheck({
          answerId: reportList[0].answerId,
          blindEndedAt: reportList[0].blindEndedAt,
          blindStartedAt: reportList[0].blindStartedAt,
          question: reportList[0].question,
          content: reportList[0].content,
          nickname: reportList[0].nickname,
          date: reportList[0].date
        })
      } else {
        setNowCheck({})
      }
    }
  }, [reportList])

  return !isLogin ? (
    <ReportListWrapper style={{ flexDirection: 'column', gap: '10px' }}>
      <Icons.OverhaulDuei width="120" height="120" />
      <Button
        buttonType="secondary"
        text="로그인 하러 가기"
        textSize="b1_b"
        textColor="logo"
        _onClick={() => {
          window.location.href = '/admin'
        }}
      />
    </ReportListWrapper>
  ) : nowCheck == null ? (
    <ReportListWrapper>
      <Loading />
    </ReportListWrapper>
  ) : Object.keys(nowCheck).length > 0 ? (
    <ReportListWrapper>
      <ReportListLeft>
        <style.TextP typo="h6_b">신고 목록</style.TextP>

        {reportList.map((v: any, i: number) => {
          return (
            <ReportListItem
              key={i}
              checked={nowCheck.answerId === v.answerId}
              onClick={() => {
                setNowCheck({
                  answerId: v.answerId,
                  blindEndedAt: v.blindEndedAt,
                  blindStartedAt: v.blindStartedAt,
                  question: v.question,
                  content: v.content,
                  nickname: v.nickname,
                  date: v.date
                })
              }}
            >
              {v.answerId}
            </ReportListItem>
          )
        })}
      </ReportListLeft>

      <ReportListRight>
        <ReportListContentWrapper>
          <style.TextP typo="h6_b">닉네임</style.TextP>
          <style.TextP typo="h6">{nowCheck.nickname}</style.TextP>

          <Hr _maxWidth="100%" />

          <style.TextP typo="h6_b">차단 일자</style.TextP>
          <style.TextP typo="h6">{`${nowCheck.blindStartedAt[0] as string}년 ${
            nowCheck.blindStartedAt[1] as string
          }월 ${nowCheck.blindStartedAt[2] as string}일 ~ ${nowCheck.blindEndedAt[0] as string}년 ${
            nowCheck.blindEndedAt[1] as string
          }월 ${nowCheck.blindEndedAt[2] as string}일`}</style.TextP>

          <Hr _maxWidth="100%" />

          <style.TextP typo="h6_b">질문</style.TextP>
          <style.TextP typo="h6">
            {nowCheck.question} ({nowCheck.date[0]}/{nowCheck.date[1]}/{nowCheck.date[2]})
          </style.TextP>

          <Hr _maxWidth="100%" />

          <style.TextP typo="h6_b">답변</style.TextP>
          <AnswerWrapper>
            <style.TextP typo="h6">{nowCheck.content}</style.TextP>
          </AnswerWrapper>

          <Button
            buttonType="secondary"
            text="신고 취소"
            textColor="logo"
            textSize="b1_b"
            _margin="auto auto 0 auto"
            _padding="20px 30px"
            _onClick={handleOpen}
          />
        </ReportListContentWrapper>
      </ReportListRight>

      {open && (
        <TwoButtonModal
          mainText="답변을 삭제할까요?"
          rightBtnText="삭제하기"
          leftBtnOnClick={handleClose}
          rightBtnOnClick={_onClick}
        />
      )}
    </ReportListWrapper>
  ) : (
    <ReportListWrapper>신고 내역 없음</ReportListWrapper>
  )
}

const ReportListWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
  height: 100vh;
`

const ReportListLeft = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
  max-width: 425px;
  height: 100vh;

  p {
    padding: 14px 60px;
  }
`

const ReportListItem = styled.button<{ checked: boolean }>`
  cursor: pointer;

  width: 100%;
  padding: 14px 60px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.side.side200};
  }

  ${({ checked, theme }) => checked && `background-color: ${theme.colors.side.side200};`}
`

const ReportListRight = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
  height: 100vh;
  padding: 14px 60px;

  background-color: ${({ theme }) => theme.colors.gray.gray2};
`

const ReportListContentWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  align-items: start;
  flex-direction: column;
  gap: 10px;

  width: 80%;
  height: 80%;
  padding: 60px 60px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.side.side200};
`

const AnswerWrapper = styled.div`
  height: 100%;
  overflow: auto;
`

export default AdminReportPage
