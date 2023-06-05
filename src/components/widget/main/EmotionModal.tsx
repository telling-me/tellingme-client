import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
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

const EmotionModal = () => {
  const theme = useTheme()
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
            나는 어떤 마음이었을까?
          </TextP>
        </Grid>
        <EmotionGridWrapper>
          {emotionList.map((emotion, idx) => (
            <Emotion
              key={idx}
              flex="center"
              onClick={() => {
                setEmotion(emotion.idx)
              }}
            >
              <emotion.icon width={50} stroke={theme.colors.logo} fill={theme.colors.logo} />
            </Emotion>
          ))}
        </EmotionGridWrapper>
        <Grid flex="center" _gap="15px">
          <Button
            buttonType="tertiary"
            _width="135px"
            _height="55px"
            text="취소"
            _onClick={() => {
              if (answer.code === 'NOT_FOUND_ANSWER') navigate(backUrl)
              setIsEmotionModal(false)
            }}
          />
          <Button
            buttonType="secondary"
            _width="135px"
            _height="55px"
            text="확인"
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
  width: 56px;
  height: 56px;

  &:hover {
    cursor: pointer;
  }
`

const EmotionGridWrapper = styled(style.Grid)`
  max-width: 264px;
  height: 284px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

export default EmotionModal
