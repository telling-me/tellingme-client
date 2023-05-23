import React from 'react'
import type { ITableCell } from './type'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const TableCell = ({ emotion, question, date }: ITableCell) => {
  return (
    <CellOuterWrapper>
      <CellInnerWrapper>
        <EmotionWrapper></EmotionWrapper>

        <QuestionDateWrapper>
          <style.TextP typo="b2" textColor="black">
            {question}
          </style.TextP>
          <style.TextP typo="c" textColor="side500">
            {date}
          </style.TextP>
        </QuestionDateWrapper>
      </CellInnerWrapper>
    </CellOuterWrapper>
  )
}

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
  background-color: #e2f7f2;
`

const QuestionDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

export default TableCell
