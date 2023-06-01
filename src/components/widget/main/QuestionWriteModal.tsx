import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
// store
import useQuestionStore from 'stores/useQuestionStore'

// components
import { Button, Modal, Toggle } from 'components/core'

// assets
import Icon from 'assets/icons'

// hooks
import { useGetAnswerQuery, useGetQuestionQuery } from 'hooks/queries'

// apis
import { apis } from 'apis/apis'

// utils
import { formatStringDate } from 'utils/date'

const QuestionWriteModal = () => {
  // store
  const { setIsEmotionModal, setIsWriteModal } = useQuestionStore()

  // query
  const { data: { data: answer = null } = {} } = useGetAnswerQuery(formatStringDate(new Date()))
  const { data: { data: question = null } = {} } = useGetQuestionQuery(formatStringDate(new Date()))

  const [cancel, setCancel] = useState<boolean>(false)
  const [text, setText] = useState<string>(answer !== null && answer?.status !== 4002 ? answer?.data : '')
  const [shareToggle, setShareToggle] = useState<boolean>(false)

  // 감정 선택 모달
  useEffect(() => {
    setIsEmotionModal(true)
  }, [])

  const handlePressComplete = () => {
    // TODO: Mutation으로 Post날리기
    apis
      .postAnswer(formatStringDate(new Date()), text, 1)
      .then(() => {
        setIsWriteModal(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Modal>
        <ModalWrapper flex="center" _alignItems="start">
          <ModalInnerWrapper flex="start" direction="column" _height="100%">
            <ModalHeader flex="between">
              <style.Grid _width="56px" _height="56px" />
              <style.Grid
                flex="center"
                _width="max-content"
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
                  setCancel(true)
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
                {`${question?.date[0] as string}년 ${question?.date[1] as string}월 ${question?.date[2] as string}일`}
              </style.TextP>
            </QuestionWrapper>
            <StrikeThrough />
            <AnswerTextArea
              placeholder="여기에 기록해주세요!"
              value={text}
              maxLength={500}
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
            <FooterWrapper flex="start" direction="column">
              <style.Grid flex="end" _height="14px">
                <style.TextSpan typo="c_b" textColor="gray6">
                  {text?.length} / 500
                </style.TextSpan>
              </style.Grid>
              <style.Grid flex="between" _alignItems="start" _padding="10px 0 0 0 ">
                <Toggle label={['나혼자 보기', '타인과 공유']} value={shareToggle} setValue={setShareToggle} />
                <Button
                  buttonType="noFilled"
                  contentType="text"
                  text="완료"
                  _height="100%"
                  textColor={text?.length < 4 ? 'gray6' : 'logo'}
                  _disabled={text?.length < 4}
                  _onClick={handlePressComplete}
                />
              </style.Grid>
            </FooterWrapper>
          </ModalInnerWrapper>
        </ModalWrapper>
      </Modal>
      {cancel && (
        <Modal _width="100%" _maxWidth="325px" _height="174px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <style.Grid flex="between" direction="column" _height="100%">
            <style.Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <style.TextP typo="b1" textColor="black">
                작성을 취소하고 나가시겠어요?
              </style.TextP>
              <style.TextP typo="b2" textColor="gray7">
                작성한 답변은 초기화돼요
              </style.TextP>
            </style.Grid>
            <style.Grid flex="between">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                contentType="text"
                textColor="logo"
                text="아니오"
                _onClick={() => {
                  setCancel(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                contentType="text"
                textColor="logo"
                text="나갈래요"
                _onClick={() => {
                  setIsWriteModal(false)
                }}
              ></Button>
            </style.Grid>
          </style.Grid>
        </Modal>
      )}
    </>
  )
}

const ModalWrapper = styled(style.Grid)`
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
