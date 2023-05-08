import React from 'react'
import styled from 'styled-components'

// components
import { MainBackground, Question, QuestionWriteModal, ContinuousDate, EmotionModal } from 'components'

// store
import useQuestionStore from 'stores/useQuestionStore'

const MainPage = () => {
  const { isWriteModalOn, isEmotionModalOn } = useQuestionStore()
  return (
    <MainWrapper>
      <ContinuousDate />
      <MainBackground />
      <Question />
      {Boolean(isWriteModalOn) && <QuestionWriteModal />}
      {Boolean(isEmotionModalOn) && <EmotionModal />}
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 475px;
  padding: 0 25px;
  justify-content: center;
  align-items: center;
`

export default MainPage
