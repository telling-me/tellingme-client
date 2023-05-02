import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// store
import useQuestionStore from 'stores/useQuestionStore'

// component
import { Button } from 'components/core'

const EmotionModal = () => {
  const { setIsEmotionModal } = useQuestionStore()
  return (
    <ModalWrapper flex="center">
      <ModalInnerWrapper flex="between" direction="column">
        <style.Grid flex="center" direction="column" _gap="8px">
          <style.TextP typo="b1">오늘의 감정을 떠올려 보아요</style.TextP>
          <style.TextP typo="b2" textColor="gray5">
            나는 어떤 마음이었을까?
          </style.TextP>
        </style.Grid>
        <EmotionGridWrapper>
          {new Array(12).fill(null).map((item, idx) => (
            <Emotion key={idx} />
          ))}
        </EmotionGridWrapper>
        <style.Grid flex="center" _gap="15px">
          <Button
            buttonType="tertiary"
            contentType="text"
            _width="135px"
            _height="55px"
            text="취소"
            _onClick={() => {
              setIsEmotionModal(false)
            }}
          />
          <Button
            buttonType="secondary"
            contentType="text"
            _width="135px"
            _height="55px"
            text="확인"
            _onClick={() => {
              setIsEmotionModal(false)
            }}
          />
        </style.Grid>
      </ModalInnerWrapper>
    </ModalWrapper>
  )
}

const ModalWrapper = styled(style.Grid)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9500;
  background-color: rgba(24, 24, 24, 0.28);
  backdrop-filter: blur(6px);
`

const ModalInnerWrapper = styled(style.Grid)`
  width: 425px;
  height: 528px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 20px;
  padding: 42px 20px;
`

const Emotion = styled(style.Grid)`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.gray.gray1};

  &:hover {
    cursor: pointer;
  }
`

const EmotionGridWrapper = styled(style.Grid)`
  width: 264px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 48px;
  border-radius: 8px;
`

export default EmotionModal
