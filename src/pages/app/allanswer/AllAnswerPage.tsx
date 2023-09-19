import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

// styles
import style from 'styles/styled-components/styled'

// utils
import { formatStringDate } from 'utils/date'

// assets
import Icons from 'assets/icons'

// hooks
import { useGetCommunicationQuestionsQuery, useFormatDateArrToStr } from 'hooks'

// stores
import useCommunicationStore from 'stores/useCommunicationStore'
import { IconButton } from 'components/core'

interface ICommunicationQuestion {
  title: string
  parse: string
  date: number[]
  answerCount: number
}

const AllAnswerPage = () => {
  // store
  const { setQuestionIdx, setQuestions } = useCommunicationStore()

  const today = new Date(new Date().getTime() - 6 * 60 * 60 * 1000)
  const { data: { data: communicationQuestions = null } = {}, refetch } = useGetCommunicationQuestionsQuery(
    formatStringDate(today)
  )

  const navigate = useNavigate()

  // onClick
  const _onClick = (index: number) => {
    setQuestionIdx(index)
    setQuestions(communicationQuestions)
    navigate('/app/allanswer/allanswerlist')
  }

  useEffect(() => {
    void refetch()
  }, [])

  return (
    <AllAnswerWrapper>
      <AllAnswerHeader>
        <TextP typo="h4" textColor="gray7">
          모두의
        </TextP>
        <TextP typo="h4" textColor="gray7" _margin="8px 0 12px">
          공간
        </TextP>
        <TextPWrapper>
          <TextP typo="c" textColor="logo">
            모두의 공간은 한 질문 당 3일동안 열려요
          </TextP>
        </TextPWrapper>
      </AllAnswerHeader>

      <AllAnswerQuestions>
        {communicationQuestions?.map((v: ICommunicationQuestion, i: number) => {
          return (
            <AllAnswerQuestion
              key={i}
              onClick={() => {
                _onClick(i)
              }}
            >
              <TextP typo="b2" style={{ whiteSpace: 'pre-wrap', lineHeight: '20px' }}>{`${v.title}`}</TextP>
              <TextP typo="c" textColor="side500" _margin="8px 0 12px">
                {useFormatDateArrToStr(v.date)}
              </TextP>

              <QuestionFooter>
                <Icons.ChatTearDrop width="20" height="20" />
                <TextP typo="c_b" textColor="gray7" _margin="0 0 0 4px">
                  {v.answerCount > 999 ? `999+` : v.answerCount}
                </TextP>
                <IconButton buttonType="noFilled" _width="36" _height="36" _margin="0 0 0 auto" _onClick={() => {}}>
                  <Icons.Entrance />
                </IconButton>
              </QuestionFooter>
            </AllAnswerQuestion>
          )
        })}
      </AllAnswerQuestions>
    </AllAnswerWrapper>
  )
}

const { TextP } = style

const AllAnswerWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media all and (min-width: 1200px) {
    max-width: 1220px;
    padding: 64px 140px 0 20px;
  }

  @media all and (min-width: 1023px) and (max-width: 1999px) {
    padding: 64px 180px 12px 60px;
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    padding: 64px 60px 12px;
  }

  @media all and (max-width: 767px) {
    padding: 64px 25px 100px;
  }
`

const AllAnswerHeader = styled.div`
  ${({ theme }) => theme.common.flexStart}
  align-items: flex-start;
  flex-direction: column;

  width: 100%;
`

const TextPWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  background-color: ${({ theme }) => theme.colors.primary.primary25};
  padding: 8px 14px;
`

const AllAnswerQuestions = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-wrap: wrap;
  gap: 16px;

  width: 100%;
  margin-top: 28px;
`

const AllAnswerQuestion = styled.div`
  ${({ theme }) => theme.common.flexStart}
  align-items: flex-start;
  flex-direction: column;

  @media all and (min-width: 768px) {
    width: 48%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }

  height: 142px;
  padding: 20px 20px 16px;

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 20px;
`

const QuestionFooter = styled.div`
  ${({ theme }) => theme.common.flexStart}

  width: 100%;
  margin-top: auto;

  p {
    white-space: pre-wrap;
  }
`

export default AllAnswerPage
