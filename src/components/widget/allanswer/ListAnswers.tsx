/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

// components
import { ListAnswer, Loading } from 'components'

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
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [ref, inView] = useInView()

  const ANSWER_SIZE = 20

  const { questionIdx, questions, sortIdx, page, setPage, answers, setAnswers } = useCommunicationStore()
  const { data: { data: allAnswerList = null } = {} } = useGetAllAnswerListQuery(
    useFormatDateArrToStr(questions[questionIdx].date, '-'),
    page,
    ANSWER_SIZE,
    sortIdx === 0 ? '최신순' : sortIdx === 1 ? '관련순' : '공감순'
  )

  // 정렬 방법 바뀔 때 초기화 시켜주기
  useEffect(() => {
    setAnswers(null)
    setHasNextPage(true)
  }, [sortIdx])

  // 질문 바뀔 때 초기화 시켜주기
  useEffect(() => {
    setAnswers(null)
    setHasNextPage(true)
  }, [questionIdx])

  // 다음 페이지가 있고, 맨 끝에 닿았을 때 page 늘리기 -> query 실행
  useEffect(() => {
    if (inView && hasNextPage && answers != null) {
      setPage(+page + 1)
    }
  }, [hasNextPage, inView])

  useEffect(() => {
    if (allAnswerList != null) {
      // 이번에 들어온 데이터의 개수가 size 보다 작으면, 다음 페이지가 없다고 명시
      if (allAnswerList.content.length < ANSWER_SIZE) {
        setHasNextPage(false)
      }

      // answers에 데이터 쌓기
      if (answers == null) {
        setAnswers(allAnswerList.content)
      } else if (
        allAnswerList.content.length !== 0 &&
        allAnswerList.content[0] !== answers[answers.length - ANSWER_SIZE]
      ) {
        setAnswers([...answers, ...allAnswerList.content])
      }
    }
  }, [allAnswerList])

  return answers == null ? (
    <SingleWrapper>
      <Loading />
    </SingleWrapper>
  ) : answers.length === 0 ? (
    <SingleWrapper>
      <Icons.EmptyDuei width="100" height="100" />

      <style.TextP typo="b1_b" textColor="gray5">
        아직 올라온 글이 없어요!
      </style.TextP>
    </SingleWrapper>
  ) : (
    <ListAnswersWrapper>
      {answers.map((v: IAnswer, i: number) => {
        return (
          <ListAnswer
            key={i}
            answerId={v.answerId}
            emotion={v.emotion}
            content={v.content}
            likeCount={v.likeCount}
            isLiked={v.isLiked}
            index={i}
          />
        )
      })}
      {answers.length % 2 !== 0 && <ListAnswerEmpty />}

      {hasNextPage && (
        <LoadingWrapper ref={ref}>
          <Loading />
        </LoadingWrapper>
      )}
      <div ref={ref} />
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

const SingleWrapper = styled.div`
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

const LoadingWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
`

export default ListAnswers
