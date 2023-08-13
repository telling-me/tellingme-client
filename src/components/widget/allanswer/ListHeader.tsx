/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// assets
import Icons from 'assets/icons'

// styles
import { Theme } from 'styles/DefaultTheme'
import style from 'styles/styled-components/styled'

// components
import { Hr, IconButton } from 'components'
import useCommunicationStore from 'stores/useCommunicationStore'
import useFormatDateArrToStr from 'hooks/useFormatDateArrToStr'

const ListHeader = () => {
  const navigate = useNavigate()

  const { questionIdx, questions } = useCommunicationStore()

  if (questions.length === 0) window.location.href = '/app/allanswer'

  return (
    <ListHeaderWrapper>
      <IconButton
        buttonType="noFilled"
        _width="32px"
        _height="32px"
        _margin="20px auto 12px 0"
        _onClick={() => {
          navigate('/app/allanswer')
        }}
      >
        <Icons.ArrowLeft width="24" height="24" stroke={Theme.colors.gray.gray6} />
      </IconButton>

      <style.TextP typo="b1_b" textColor="gray7">
        {questions[questionIdx].title}
      </style.TextP>
      <style.TextP typo="b2" textColor="gray7" _margin="10px 0 18px">
        {questions[questionIdx].phrase}
      </style.TextP>
      <style.TextP typo="c" textColor="side500">
        {useFormatDateArrToStr(questions[questionIdx].date, 'ymd')}
      </style.TextP>

      <Hr _maxWidth="1200px" _margin="20px 0" />
    </ListHeaderWrapper>
  )
}

const ListHeaderWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
`

export default ListHeader
