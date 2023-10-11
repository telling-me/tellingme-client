import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import style from 'styles/styled-components/styled'
import styled from 'styled-components'

// hooks
import { usePostNoticeReadMutation, useDeleteNoticeMutation } from 'hooks/mutations'

// type
import { type INotice } from './type'

// utils
import { formatStringDate } from '../../../utils/date'

// TODO: refetch 를 받아서 쓰지말고 queryClient를 통해 refetch를 하자
const NoticeItem = ({ notice, refetch }: { notice: INotice; refetch: () => void }) => {
  const navigate = useNavigate()

  const { mutate: mutateRead } = usePostNoticeReadMutation()
  const { mutate: deleteNotice } = useDeleteNoticeMutation()

  // ref
  const ref = useRef<HTMLDivElement>(null)

  // state
  const [touchStart, setTouchStart] = useState<number>(0)
  const [deletable, setDeleteable] = useState<boolean>(false)
  // const [dragStart, setDragStart] = useState<number>(0)

  return (
    <NoticeItemWrapper
      flex="start"
      direction="column"
      onClick={() => {
        mutateRead(
          { noticeId: notice?.noticeId },
          {
            onSuccess: () => {
              refetch()
            }
          }
        )
        if (notice?.isInternal) {
          // 내부 서비스
          if (notice?.answerId !== null && notice?.answerId !== -1) {
            // 내부 - 질문 모달창
            const noticeAnswerDate = formatStringDate(new Date(notice?.date?.join('-')))
            navigate({
              search: `?notice=true&noticeAnswer=true&answerDate=${noticeAnswerDate}&noticeAnswerId=${notice?.answerId}`
            })
          } else {
            // 내부 - 나의 서재
            navigate('/app/mylibrary')
          }
        } else {
          // 외부 서비스
          window.open(notice?.link as string, '_blank')
        }
      }}
    >
      <Background
        flex="center"
        deletable={deletable}
        onClick={(e) => {
          if (deletable) {
            e.stopPropagation()
            deleteNotice(
              { noticeId: notice?.noticeId },
              {
                onSuccess: () => {
                  refetch()
                }
              }
            )
          }
        }}
      >
        <TextP typo="b1" textColor={`gray0`}>
          삭제
        </TextP>
      </Background>
      <NoticeItemInnerWrapper
        ref={ref}
        onDragStart={(e) => {}}
        onDragEnd={(e) => {}}
        onTouchStart={(e) => {
          setTouchStart(e.changedTouches[0].clientX)
        }}
        onTouchMove={(e) => {
          const moveX = e.changedTouches[0].clientX
          const deltaX = moveX - touchStart

          if (deltaX > 0 || deltaX < -72) return

          ref?.current?.style.setProperty('transform', `translateX(${deltaX}px)`)
        }}
        onTouchEnd={(e) => {
          const touchX = e.changedTouches[0].clientX
          const deltaX = touchX - touchStart

          if (deltaX < -48) {
            ref?.current?.style.setProperty('transform', `translateX(-72px)`)
            setDeleteable(true)
          } else {
            ref?.current?.style.setProperty('transform', `translateX(0px)`)
            setDeleteable(false)
          }
        }}
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
    </NoticeItemWrapper>
  )
}

const { Grid, TextP } = style

const NoticeItemWrapper = styled(Grid)`
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.side.side200};
  }
  position: relative;
  transition: transform 800ms;
  overflow: hidden;
`

const NoticeItemInnerWrapper = styled(Grid)`
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.side.side100};

  transition: transform 400ms;
`

const Background = styled(Grid)<{ deletable?: boolean }>`
  position: absolute;
  width: 72px;
  height: 100%;
  right: 0;
  background-color: red;
  ${({ deletable }) => (deletable ?? false ? `z-index:0;` : 'z-index:-1;')}
`

export default NoticeItem
