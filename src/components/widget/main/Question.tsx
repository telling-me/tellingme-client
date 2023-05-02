import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// assets
import Icon from 'assets/icons'

// store
import useQuestionStore from 'stores/useQuestionStore'

const Question = () => {
  const { setIsWriteModal } = useQuestionStore()
  return (
    <style.Grid flex="start" _width="auto" direction="column" align="center" _margin="0 25px">
      <QuestionDateWrapper flex="center">
        <style.TextSpan typo="c" textColor="side500">
          2023년 03월 01일
        </style.TextSpan>
      </QuestionDateWrapper>
      {/**
       * TODO: 425px 에서 내려가야됨
       */}
      <QuestionWrapper flex="center" _margin="53px 0 36px">
        <QuestionInnerWrapper
          flex="center"
          _width="100%"
          _height="70px"
          direction="column"
          _gap="16px"
          _margin="0 30px"
        >
          <style.TextP typo="b1" textColor="logo" textAlign="center">
            텔링미를 사용하고 있을 때 어떤 기분과 생각을 하고 계신가요?
          </style.TextP>

          <style.TextP typo="b2" textColor="gray5" textAlign="center">
            하루 한번, 질문에 답변하며 나를 깨닫는 시간
          </style.TextP>
        </QuestionInnerWrapper>
        <BubbleWrapper _width="max-content">
          <Icon.Bubble width="43px" height="35px" />
        </BubbleWrapper>
      </QuestionWrapper>
      <QuestionButtonWrapper
        flex="center"
        _width="55px"
        _height="55px"
        onClick={() => {
          setIsWriteModal(true)
        }}
      >
        <Icon.Magnet width="30px" height="30px" />
      </QuestionButtonWrapper>
    </style.Grid>
  )
}

const QuestionDateWrapper = styled(style.Grid)`
  width: 125px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 20px;
`
const QuestionWrapper = styled(style.Grid)`
  width: 100%;
  max-width: 425px;
  height: 142px;
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 28px;
  position: relative;
`

const QuestionInnerWrapper = styled(style.Grid)`
  max-width: 265px;
`

const BubbleWrapper = styled(style.Grid)`
  position: absolute;
  top: -17px;
`

const QuestionButtonWrapper = styled(style.Grid)`
  background-color: ${({ theme }) => theme.colors.side.side100};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  svg {
    stroke: ${({ theme }) => theme.colors.primary.primary400_main};
  }
`

export default Question
