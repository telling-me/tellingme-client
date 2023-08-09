import React from 'react'
import styled from 'styled-components'

// components
import { ListAnswer } from 'components'

// hooks
import { useFormatDateArrToStr, useGetAllAnswerListQuery } from 'hooks'
import useCommunicationStore from 'stores/useCommunicationStore'

// type
import type { IAnswer } from './type'

// assets
import Icons from 'assets/icons'

// styles
import style from 'styles/styled-components/styled'

const ListAnswers = () => {
  const { questionIdx, questions, sortIdx } = useCommunicationStore()
  const { data: { data: allAnswerList = null } = {} } = useGetAllAnswerListQuery(
    useFormatDateArrToStr(questions[questionIdx].date, '-'),
    0,
    10,
    sortIdx === 0 ? '공감순' : sortIdx === 1 ? '관련순' : '최신순'
  )
  console.log(allAnswerList)
  return allAnswerList?.empty === false ? (
    <ListAnswersWrapper>
      {allAnswerList?.content.map((v: IAnswer, i: number) => {
        return (
          <ListAnswer
            key={i}
            answerId={v.answerId}
            emotion={v.emotion}
            content={v.content}
            likeCount={v.likeCount}
            isLiked={v.isLiked}
          />
        )
      })}
      {allAnswerList?.length % 2 !== 0 && <ListAnswerEmpty />}
    </ListAnswersWrapper>
  ) : (
    <EmptyWrapper>
      <Icons.EmptyDuei width="100" height="100" />

      <style.TextP typo="b1_b" textColor="gray5">
        아직 올라온 글이 없어요!
      </style.TextP>
    </EmptyWrapper>
  )
}

const ListAnswersWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  width: 100%;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

const EmptyWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 24px;

  width: 100%;
  height: 100%;
`

const ListAnswerEmpty = styled.div`
  flex-grow: 1;

  @media all and (min-width: 768px) {
    width: 48%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`

export default ListAnswers
