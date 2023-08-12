import React from 'react'
import styled from 'styled-components'

// components
import { EmotionIcon } from 'components'

// styles
import style from 'styles/styled-components/styled'

// hooks
import useFormatDateArrToStr from 'hooks/useFormatDateArrToStr'

// types
import type { ICardViewCard } from './type'
import { Link } from 'react-router-dom'
import { formatStringDate } from 'utils/date'

const CardViewCard = ({ data, isMargin = false, _onClick }: ICardViewCard) => {
  const questionDate = new Date(Number(data.date[0]), Number(data.date[1]) - 1, Number(data.date[2]))

  return (
    <Link to={`?date=${formatStringDate(new Date(questionDate))}`}>
      <CardViewCardWrapper isMargin={isMargin} onClick={_onClick}>
        <EmotionWrapper>
          <EmotionIcon emotion={data.emotion} width={44} />
        </EmotionWrapper>

        <TextP typo="b2_b" textColor="gray7" _margin="20px 0 12px">
          {data.title}
        </TextP>

        <TextP typo="c" textColor="gray5">
          {data.phrase}
        </TextP>

        <TextP typo="c" _margin="36px 0 72px">
          {data.content}
        </TextP>

        <TextP typo="c" textColor="side500" _margin="0 0 0 auto">
          {useFormatDateArrToStr(data.date, '. ')}
        </TextP>
      </CardViewCardWrapper>
    </Link>
  )
}

const { TextP } = style

const CardViewCardWrapper = styled.button<{ isMargin: boolean }>`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 302px;
  min-width: 302px;
  height: 478px;
  padding: 32px 28px;

  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 24px;
  ${({ theme }) => `box-shadow: ${theme.shadow.shadow1}`};

  cursor: pointer;
  p:nth-child(3) {
    min-height: 33.59px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.4;
  }

  p:nth-child(4) {
    height: 100%;
    line-height: 22px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  @media all and (min-width: 767px) {
    ${({ isMargin }) => isMargin && `margin-bottom: 72px;`}
  }

  @media all and (max-height: 721px) {
    height: 100%;
  }
`

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 56px;
  height: 56px;
`

export default CardViewCard
