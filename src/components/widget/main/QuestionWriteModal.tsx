import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
// store
import useQuestionStore from 'stores/useQuestionStore'

// components
import { Button, Toggle } from 'components/core'

// assets
import Icon from 'assets/icons'

// hooks
import { useGetTodayAnswerQuery, useGetTodayQuestionQuery } from 'hooks/queries'
import { apis } from 'apis/apis'

const QuestionWriteModal = () => {
  // store
  const { setIsEmotionModal, setIsWriteModal } = useQuestionStore()
  // query
  const { data: { data: answer = null } = {} } = useGetTodayAnswerQuery()
  const { data: { data: question = null } = {} } = useGetTodayQuestionQuery()

  const [text, setText] = useState<string>(answer?.status !== 4002 ? answer?.data : '')
  const [shareToggle, setShareToggle] = useState<boolean>(false)

  // 감정 선택
  useEffect(() => {
    // setIsEmotionModal(true)
  }, [])

  const handlePressComplete = () => {
    // TODO: Mutation으로 Post날리기
    apis
      .postTodayAnswer(text, 1)
      .then(() => {
        setIsWriteModal(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
            <style.TextP typo="h6" textColor="logo" textAlign="center" wordBreak="keep-all">
              {question?.title}
            </style.TextP>

            <style.TextP typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
              {question?.phrase}
            </style.TextP>
          </style.Grid>
          <style.TextP typo="c" textColor="side500" textAlign="center">
            {`${question?.date[0] as string}년 ${question?.date[1] as string}월 ${question?.date[2] as string}년`}
          </style.TextP>
        </QuestionWrapper>
        <StrikeThrough />
        <AnswerTextArea
          placeholder="여기에 기록해주세요!"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
        <FooterWrapper flex="start" direction="column">
          <style.Grid flex="end" _height="14px">
            <style.TextSpan typo="c_b">{text.length} / 500</style.TextSpan>
          </style.Grid>
          <style.Grid flex="between" _alignItems="start" _padding="10px 0 0 0 ">
            <Toggle label={['나만 보기', '타인과 공유']} value={shareToggle} setValue={setShareToggle} />
            <Button
              buttonType="noFilled"
              contentType="text"
              text="완료"
              textColor="logo"
              _disabled={text.length < 4}
              _onClick={handlePressComplete}
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
