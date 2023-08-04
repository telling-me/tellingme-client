import React from 'react'
import styled from 'styled-components'

// components
import { ListAnswer } from 'components'

// hooks
import { useFormatDateArrToStr, useGetAllAnswerListQuery } from 'hooks'
import useCommunicationStore from 'stores/useCommunicationStore'

// type
import type { IAnswer } from './type'

const ListAnswers = () => {
  const { questionIdx, questions, sortIdx } = useCommunicationStore()
  const { data: { data: allAnswerList = null } = {} } = useGetAllAnswerListQuery(
    useFormatDateArrToStr(questions[questionIdx].date, '-'),
    0,
    10,
    sortIdx === 0 ? '공감순' : sortIdx === 1 ? '관련순' : '최신순'
  )

  return (
    <ListAnswersWrapper>
      {allAnswerList?.content.map((v: IAnswer, i: number) => {
        return (
          <ListAnswer key={i} answerId={v.answerId} emotion={v.emotion} content={v.content} likeCount={v.likeCount} />
        )
      })}
      {allAnswerList?.length % 2 !== 0 && <EmptyWrapper></EmptyWrapper>}
    </ListAnswersWrapper>
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
  flex-grow: 1;

  @media all and (min-width: 768px) {
    width: 48%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`

export default ListAnswers
