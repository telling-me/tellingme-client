import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// assets
import Icon from 'assets/icons'

// hooks
import { useGetAnswerQuery, useGetQuestionQuery } from 'hooks/queries'

// utils
import { formatStringDate } from 'utils/date'
import { Link } from 'react-router-dom'

const Question = () => {
  const today = new Date()

  // query
  const { data: { data: answer = null } = {} } = useGetAnswerQuery(formatStringDate(today))
  const { data: { data: question = null } = {} } = useGetQuestionQuery(formatStringDate(today))

  return (
    <Grid flex="start" _width="100%" direction="column" align="center">
      <QuestionDateWrapper flex="center">
        <TextSpan typo="c" textColor="side500">
          {`${question?.date[0] as string}년 ${question?.date[1] as string}월 ${question?.date[2] as string}일`}
        </TextSpan>
      </QuestionDateWrapper>
      <QuestionWrapper flex="center" _margin="53px 0 36px">
        <QuestionInnerWrapper flex="center" _width="100%" _height="70px" direction="column" _gap="16px">
          {question?.title.split('\n').map((line: string) => (
            <TextP key={line} typo="b1" textColor="logo" textAlign="center" wordBreak="keep-all">
              {line}
            </TextP>
          ))}

          {question?.phrase.split('\n').map((line: string) => (
            <TextP key={line} typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
              {line}
            </TextP>
          ))}
        </QuestionInnerWrapper>
        <BubbleWrapper _width="max-content">
          <Icon.Bubble width="43px" height="35px" />
        </BubbleWrapper>
      </QuestionWrapper>
      <Link to={`?date=${formatStringDate(today)}`}>
        <QuestionButtonWrapper flex="center" _width="55px" _height="55px">
          <Icon.Pen width="30px" height="30px" />
        </QuestionButtonWrapper>
      </Link>
      {answer !== null && answer?.status !== 4003 && (
        <TextP typo="c" textColor="logo" _margin="12px 0 0 0">
          답변 완료!
        </TextP>
      )}
    </Grid>
  )
}

const { Grid, TextP, TextSpan } = style

const QuestionDateWrapper = styled(Grid)`
  width: 125px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 20px;
`
const QuestionWrapper = styled(Grid)`
  width: 100%;
  max-width: 425px;
  height: 142px;
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 28px;
  position: relative;
`

const QuestionInnerWrapper = styled(Grid)`
  width: 265px;
`

const BubbleWrapper = styled(Grid)`
  position: absolute;
  top: -17px;
`

const QuestionButtonWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.side.side100};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
  svg {
    stroke: ${({ theme }) => theme.colors.logo};
  }
`

export default Question
