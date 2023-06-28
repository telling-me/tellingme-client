import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// type
import type { ITableCell } from './type'

// utils
import { formatStringDate } from 'utils/date'
import EmotionIcon from '../main/EmotionIcon'

const TableCell = ({ emotion, question, date }: ITableCell) => {
  const questionDate = new Date(Number(date[0]), Number(date[1]) - 1, Number(date[2]))

  return (
    <Link to={`?date=${formatStringDate(new Date(questionDate))}`}>
      <CellOuterWrapper>
        <CellInnerWrapper>
          <EmotionWrapper>
            <EmotionIcon emotion={emotion} width={30} />
          </EmotionWrapper>

          <QuestionDateWrapper>
            <TextP typo="b2" textColor="black" ellipsis={true} _width="100%">
              {question.replace(/\n/gm, ' ')}
            </TextP>
            <TextP typo="c" textColor="side500">
              {`${date?.[0]}년 ${date?.[1]}월 ${date?.[2]}일`}
            </TextP>
          </QuestionDateWrapper>
        </CellInnerWrapper>
      </CellOuterWrapper>
    </Link>
  )
}

const { TextP } = style

const CellOuterWrapper = styled.button`
  width: 100%;
  padding: 18px 0px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.side.side200};
  }

  transition: 0.2s;
`

const CellInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.2s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 0px 25px;
  }
`

const EmotionWrapper = styled.div`
  width: 36px;
  height: 36px;
`

const QuestionDateWrapper = styled.div`
  max-width: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export default TableCell
