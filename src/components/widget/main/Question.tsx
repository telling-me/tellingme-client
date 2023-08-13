import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// assets
import Icon from 'assets/icons'

// hooks
import { useGetMyAnswerQuery, useGetQuestionQuery } from 'hooks'

// utils
import { formatStringDate } from 'utils/date'
import { Link } from 'react-router-dom'

const Question = () => {
  // 새벽 6시 업데이트
  const today = new Date(new Date().getTime() - 6 * 60 * 60 * 1000)

  // query
  const { data: { data: answer = null } = {} } = useGetMyAnswerQuery(formatStringDate(today))
  const { data: { data: question = null } = {} } = useGetQuestionQuery(formatStringDate(today))

  return (
    <Grid flex="start" _width="100%" direction="column" align="center">
      <QuestionDateWrapper flex="center">
        <TextSpan typo="c" textColor="side500">
          {`${new Date().getFullYear()}년 ${new Date().getMonth() + 1}월 ${new Date().getDate()}일`}
        </TextSpan>
      </QuestionDateWrapper>
      <QuestionWrapper flex="center" _margin="53px 0 36px">
        <QuestionInnerWrapper flex="center" _width="100%" _height="70px" direction="column" _gap="16px">
          <Grid flex="center" direction="column" _gap="4px">
            {question?.title?.split('\n')?.map((line: string) => (
              <TextP key={line} typo="b1_b" textColor="logo" textAlign="center" wordBreak="keep-all">
                {line}
              </TextP>
            ))}
          </Grid>
          <Grid flex="center" direction="column" _gap="4px">
            {question?.phrase?.split('\n')?.map((line: string) => (
              <TextP key={line} typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
                {line}
              </TextP>
            ))}
          </Grid>
        </QuestionInnerWrapper>
        <EmotionWrapper _width="max-content">
          <Icon.Bubble width="43px" height="35px" />
        </EmotionWrapper>
      </QuestionWrapper>
      <Link to={`?date=${formatStringDate(today)}`}>
        <QuestionButtonWrapper flex="center" _width="55px" _height="55px">
          <Icon.Pen width="30px" height="30px" />
        </QuestionButtonWrapper>
      </Link>
      {answer !== null && answer?.code !== 'NOT_FOUND_ANSWER' && (
        <TextP typo="c_b" textColor="logo" _margin="18px 0 0 0">
          기록 완료!
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

const EmotionWrapper = styled(Grid)`
  position: absolute;
  top: -17px;

  svg {
    filter: drop-shadow(${({ theme }) => theme.shadow.shadow2});
  }
`

const QuestionButtonWrapper = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.side.side100};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.shadow2};
    svg {
      .fill_hover {
        fill: rgba(131, 222, 217, 1);
      }
    }
  }
  svg {
    .fill_hover {
      fill: ${({ theme }) => theme.colors.logo};
    }
  }
`

export default Question
