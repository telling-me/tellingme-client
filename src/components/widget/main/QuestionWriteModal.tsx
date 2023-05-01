import React, { useEffect } from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
// store
import useQuestionStore from 'stores/useQuestionStore'

// components
import { Button } from 'components/core'

// assets
import Icon from 'assets/icons'

const QuestionWriteModal = () => {
  // store
  const { setIsEmotionModal, setIsWriteModal } = useQuestionStore()

  // 감정 선택
  useEffect(() => {
    // setIsEmotionModal(true)
  }, [])

  return (
    <ModalWrapper flex="center" _alignItems="start">
      <ModalInnerWrapper flex="start" direction="column" _height="100%">
        <ModalHeader flex="between">
          <style.Grid _width="56px" _height="56px" />
          <style.Grid
            flex="center"
            onClick={() => {
              setIsEmotionModal(true)
            }}
          >
            <Icon.Bubble width="56px" height="56px" />
          </style.Grid>
          <Button
            icon="close"
            contentType="icon"
            buttonType="noFilled"
            _onClick={() => {
              setIsWriteModal(false)
            }}
            iconColor="gray6"
            iconSize="medium"
          />
        </ModalHeader>
        <QuestionWrapper flex="start" direction="column" _gap="18px">
          <style.Grid flex="start" direction="column" _gap="10px">
            <style.TextP typo="h6" textColor="logo" textAlign="center">
              내가 좋아하는 색깔과 그 색깔이 가장 잘 어울리는 사물 혹은 사람을 떠올려볼까나요?
            </style.TextP>

            <style.TextP typo="b2" textColor="gray5" textAlign="center">
              색은 나의 성격과 행복을 반영해요
            </style.TextP>
          </style.Grid>
          <style.TextP typo="c" textColor="side500" textAlign="center">
            2023년 03월 01일
          </style.TextP>
        </QuestionWrapper>
        <StrikeThrough />
        <AnswerTextArea placeholder="여기에 기록해주세요!" />
        <FooterWrapper flex="start" direction="column">
          <style.Grid flex="end" _height="14px">
            <style.TextSpan typo="c_b">500 / 500</style.TextSpan>
          </style.Grid>
          <style.Grid flex="between" _alignItems="start" _padding="10px 0 0 0 ">
            <style.TextP typo="b1">나혼자 보기</style.TextP>
            <Button
              buttonType="noFilled"
              contentType="text"
              text="완료"
              _onClick={() => {
                setIsWriteModal(false)
              }}
            />
          </style.Grid>
        </FooterWrapper>
      </ModalInnerWrapper>
    </ModalWrapper>
  )
}

const ModalWrapper = styled(style.Grid)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.side.side100};
`
const ModalInnerWrapper = styled(style.Grid)`
  max-width: 1200px;
  margin: 0 20px;
`

const ModalHeader = styled(style.Grid)`
  margin: 20px 0;
  align-items: flex-start;
`

const QuestionWrapper = styled(style.Grid)`
  max-width: 300px;
  margin: 20px 0 60px 0;
`

const StrikeThrough = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  border: 1px ${({ theme }) => theme.colors.side.side300} solid;
`

const AnswerTextArea = styled.textarea`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  border: none;
  resize: none;
  outline-color: ${({ theme }) => theme.colors.side.side100};
  background-color: inherit;
  line-height: 28px;

  overflow-y: overlay;

  @media screen and (max-width: 767px) {
    line-height: 24px;
  }
`
const FooterWrapper = styled(style.Grid)`
  height: 108px;
`

export default QuestionWriteModal
