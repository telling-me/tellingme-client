import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components/core'

// store
import useQuestionStore from 'stores/useQuestionStore'

// ani
import { modalAni } from 'styles/ani'

// hooks
import { useGetAnswerQuery } from 'hooks'

// utils
import { formatStringDate } from 'utils/date'
import { emotionList } from 'data/emotion'
import useAnswerStore from 'stores/useAnswerStore'
import Icon from 'assets/icons'

const EmotionModal = () => {
  const date = new URLSearchParams(window.location.search).get('date')
  const backUrl = location.hash.split('?date')[1]

  // query
  const { data: { data: answer = null } = {} } = useGetAnswerQuery(formatStringDate(new Date(date as string)))

  const navigate = useNavigate()

  const { setIsEmotionModal } = useQuestionStore()
  const { emotion, setEmotion } = useAnswerStore()

  useEffect(() => {
    setEmotion(answer?.code === 'NOT_FOUND_ANSWER' ? null : answer?.emotion)
  }, [])

  return (
    <ModalWrapper flex="center" variants={modalAni} initial="init" animate="ani" exit="exit">
      <ModalInnerWrapper flex="between" direction="column">
        <Grid flex="center" direction="column" _gap="8px">
          <TextP typo="b1">오늘의 감정을 떠올려 보아요</TextP>
          <TextP typo="b2" textColor="gray5">
            {emotion === null ? '나는 어떤 마음이었을까?' : emotionList[emotion - 1].description}
          </TextP>
        </Grid>
        <EmotionGridWrapper selected={emotion}>
          {emotionList.map((emotionIcon, idx) => (
            <>
              <Emotion
                key={idx}
                flex="center"
                onClick={() => {
                  // TODO: membership 처리필요
                  if (!emotionIcon.membership) setEmotion(emotionIcon.idx)
                }}
              >
                <emotionIcon.icon width={56} />
                <LockEmotion display={!emotionIcon.membership ? 'none' : 'block'}>
                  <Icon.Lock width={24} />
                </LockEmotion>
              </Emotion>
            </>
          ))}
        </EmotionGridWrapper>
        <Grid flex="center" _gap="15px">
          <Button
            buttonType="tertiary"
            _width="135px"
            _height="55px"
            textSize="h6"
            text="취소"
            textColor="logo"
            _onClick={() => {
              if (answer.code === 'NOT_FOUND_ANSWER') navigate(backUrl)
              setIsEmotionModal(false)
            }}
          />
          <Button
            buttonType="secondary"
            _width="135px"
            _height="55px"
            textSize="h6"
            text="확인"
            textColor={emotion === null ? 'gray4' : 'logo'}
            _onClick={() => {
              setIsEmotionModal(false)
            }}
            _disabled={emotion === null}
          />
        </Grid>
      </ModalInnerWrapper>
    </ModalWrapper>
  )
}

const { Grid, TextP } = style

const ModalWrapper = styled(style.Grid)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9500;
  background-color: rgba(24, 24, 24, 0.28);
  backdrop-filter: blur(6px);

  @media all and (max-width: 767px) {
    align-items: end;
  }
`

const ModalInnerWrapper = styled(style.Grid)`
  width: 425px;
  height: 528px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 20px;
  padding: 42px 20px;
  transition: 0.2s;

  @media all and (max-width: 767px) {
    width: 100%;
    height: 494px;
    padding: 42px 20px 8px 20px;
    border-radius: 20px 20px 0 0;
  }
`

const Emotion = styled(style.Grid)`
  position: relative;
  width: 56px;
  height: 56px;

  &:hover {
    cursor: pointer;
  }
`

const EmotionGridWrapper = styled(style.Grid)<{ selected: number | null }>`
  max-width: 264px;
  height: 284px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  > div > svg:nth-child(1) {
    opacity: 0.5;
  }

  ${({ selected }) =>
    selected !== null &&
    css`
      > div:nth-child(${selected}) > svg:nth-child(1) {
        opacity: 1;
      }
    `}
`

const LockEmotion = styled.div<{ display: string }>`
  display: ${({ display }) => display};
  position: absolute;
`

export default EmotionModal
