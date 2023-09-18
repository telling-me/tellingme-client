/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import { EmotionIcon, IconButton, Modal, ToggleChip } from 'components'
import Icon from 'assets/icons'

// styles
import style from 'styles/styled-components/styled'
import styled, { useTheme } from 'styled-components'

// hooks
import { useGetNoticeQuery, useGetNoticeSummaryQuery } from 'hooks/queries'
import { usePostNoticeReadAllMutation, usePostNoticeReadMutation, useDeleteNoticeMutation } from 'hooks/mutations'

// type
import { type INotice } from './type'

// utils
import { formatStringDate } from '../../../utils/date'
import LoadingComponent from 'components/core/loading/Loading'

const NoticeModal = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  // query
  const { data: { data: noticeList = null } = {}, isLoading: isNoticeLoading } = useGetNoticeQuery()
  const { data: { data: noticeSummary = null } = {} } = useGetNoticeSummaryQuery()

  // mutation
  const { mutate: mutateReadAll } = usePostNoticeReadAllMutation()
  const { mutate: mutateRead } = usePostNoticeReadMutation()
  const { mutate: deleteNotice } = useDeleteNoticeMutation()

  return (
    <Modal>
      <ModalWrapper flex="start" direction="column">
        <ModalHeader flex="between" _padding="20px 21px 14px 21px">
          <div style={{ width: '32px', height: '32px' }}></div>
          <TextP typo="h6_b" textColor="gray6">
            알림
          </TextP>
          <IconButton
            buttonType="noFilled"
            _width="32px"
            _height="32px"
            _onClick={() => {
              navigate(-1)
            }}
          >
            <Icon.Close width="24" height="24" stroke={theme.colors.gray.gray6} />
          </IconButton>
        </ModalHeader>
        <ChipWrapper _padding="4px 25px">
          <ToggleChip
            label="전체 읽음"
            // status가 false면 활성화 (toggle됨)
            action={noticeSummary?.status === false}
            _onClick={() => {
              mutateReadAll()
            }}
          />
        </ChipWrapper>
        {isNoticeLoading ? (
          <Grid flex="center" _height="100%">
            <LoadingComponent />
          </Grid>
        ) : (
          <NoticeScrollWrapper>
            {noticeList?.map((notice: INotice, idx: number) => (
              <NoticeItem
                key={idx}
                flex="start"
                direction="column"
                onClick={() => {
                  mutateRead({ noticeId: notice?.noticeId })
                  if (notice?.isInternal) {
                    // 내부 서비스
                    if (notice?.answerId !== null) {
                      // 내부 - 질문 모달창
                      // RN에 answerId전달
                      window?.ReactNativeWebView?.postMessage(
                        JSON.stringify({
                          answerId: notice?.answerId
                        })
                      )
                      navigate({ search: `?answerId=${notice?.answerId}` })
                    } else {
                      // 내부 - 나의 서재
                    }
                  } else {
                    // 외부 서비스
                    window.open(notice?.link as string, '_blank')
                  }
                }}
              >
                <NoticeItemInnerWrapper
                  flex="start"
                  direction="column"
                  _padding="18px 25px"
                  _alignItems="start"
                  _gap="8px"
                >
                  <TextP typo="b2_b" textColor={notice.isRead ? 'gray3' : 'gray6'}>
                    {notice.title}
                  </TextP>
                  {notice?.content !== null && (
                    <TextP typo="b2" textColor={notice.isRead ? 'gray3' : 'gray6'}>
                      {notice.content}
                    </TextP>
                  )}

                  <TextP typo="c" textColor={'gray3'}>
                    {formatStringDate(new Date(notice?.createdAt?.slice(0, 3)?.join('.')), '.')}
                  </TextP>
                </NoticeItemInnerWrapper>
              </NoticeItem>
            ))}
          </NoticeScrollWrapper>
        )}
      </ModalWrapper>
    </Modal>
  )
}

const { Grid, TextP } = style

const ModalWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.side.side100};
`

const ChipWrapper = styled(Grid)`
  max-width: 1200px;
`

const NoticeScrollWrapper = styled(Grid)`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const NoticeItem = styled(Grid)`
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.side.side200};
  }
`

const NoticeItemInnerWrapper = styled(Grid)`
  max-width: 1200px;
`

const ModalHeader = styled(Grid)`
  max-width: 1200px;
`

export default NoticeModal
