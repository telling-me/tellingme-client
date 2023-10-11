import React from 'react'
import styled, { useTheme } from 'styled-components'

// components
import { EmotionIcon, IconButton } from 'components'

// styles
import style from 'styles/styled-components/styled'

// hooks
import useFormatDateArrToStr from 'hooks/useFormatDateArrToStr'

// types
import type { ICardViewCard } from './type'
import { Link } from 'react-router-dom'
import { formatStringDate } from 'utils/date'
import Icon from 'assets/icons'
import { getCookie } from 'utils/cookies'

const CardViewCard = ({ data, isMargin = false, _onClick }: ICardViewCard) => {
  const theme = useTheme()
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

        <TextP typo="c" textColor="black" _margin="36px 0 72px">
          {data.content}
        </TextP>
        {getCookie('device') === 'android' ? (
          <Grid flex="between">
            <IconButton
              buttonType="noFilled"
              _width="24px"
              _height="24px"
              _onClick={(e) => {
                e.preventDefault()
                window?.ReactNativeWebView?.postMessage(
                  JSON.stringify({ event: 'share', date: formatStringDate(new Date(questionDate)) })
                )
              }}
            >
              <Icon.Share width="20" height="20" stroke={theme.colors.gray.gray5} />
            </IconButton>
            <TextP typo="c" textColor="side500">
              {useFormatDateArrToStr(data.date, '. ')}
            </TextP>
          </Grid>
        ) : (
          <Grid flex="end">
            <TextP typo="c" textColor="side500">
              {useFormatDateArrToStr(data.date, '. ')}
            </TextP>
          </Grid>
        )}
      </CardViewCardWrapper>
    </Link>
  )
}

const { TextP, Grid } = style

const CardViewCardWrapper = styled.button<{ isMargin: boolean }>`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 302px;
  min-width: 302px;
  height: 100vmin;
  max-height: 478px;
  padding: 32px 28px;

  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 24px;
  ${({ theme }) => `box-shadow: ${theme.shadow.shadow1}`};

  a {
    color: ${({ theme }) => theme.colors.gray.black};
  }

  cursor: pointer;
  p:nth-child(3) {
    min-height: 33.59px;
    white-space: pre-wrap;
    text-align: center;
    line-height: 1.4;
  }

  p:nth-child(4) {
    height: 100%;

    text-align: start;
    line-height: 22px;

    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }

  @media all and (min-width: 767px) {
    ${({ isMargin }) => isMargin && `margin-bottom: 72px;`}
  }
`

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 56px;
  height: 56px;
`

export default CardViewCard
