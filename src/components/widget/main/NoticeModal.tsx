import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import { IconButton, Modal, NoticeItem, ToggleChip } from 'components'
import LoadingComponent from 'components/core/loading/Loading'
import Icon from 'assets/icons'

// styles
import style from 'styles/styled-components/styled'
import styled, { useTheme } from 'styled-components'

// hooks
import { useGetNoticeQuery, useGetNoticeSummaryQuery } from 'hooks/queries'
import { usePostNoticeReadAllMutation } from 'hooks/mutations'

// type
import { type INotice } from './type'

const NoticeModal = () => {
  const navigate = useNavigate()
  const theme = useTheme()

  // query
  const {
    data: { data: noticeList = null } = {},
    isLoading: isNoticeLoading,
    refetch: noticeRefetch
  } = useGetNoticeQuery()
  const { data: { data: noticeSummary = null } = {}, refetch: noticeSummaryRefetch } = useGetNoticeSummaryQuery()

  // mutation
  const { mutate: mutateReadAll } = usePostNoticeReadAllMutation()

  const noticeRefetchAll = async () => {
    await noticeRefetch()
    await noticeSummaryRefetch()
  }

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
              mutateReadAll(
                // TODO : 임시로 onSuccess Refetch 추가
                { data: 'all' },
                {
                  onSuccess: async () => {
                    await noticeRefetchAll()
                  }
                }
              )
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
                key={`${notice.title} ${String(idx)} ${notice.createdAt.join('-')}`}
                notice={notice}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                refetch={noticeRefetchAll}
              />
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

const ModalHeader = styled(Grid)`
  max-width: 1200px;
`
export default NoticeModal
