import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

// components
import { EmotionIcon, EmotionText, IconButton } from 'components'

// data
import { emotionList } from 'data/emotion'

// styles
import style from 'styles/styled-components/styled'
import { Theme } from 'styles/DefaultTheme'

// assets
import Icons from 'assets/icons'

// type
import type { IAnswer } from './type'

// hooks
import { usePostLikesMutation } from 'hooks'
import useCommunicationStore from 'stores/useCommunicationStore'

const ListAnswer = ({ answerId, emotion, content, likeCount, isLiked, index }: IAnswer) => {
  const { answers, setAnswers } = useCommunicationStore()
  const { mutate: postLikesMutate } = usePostLikesMutation()
  const navigate = useNavigate()

  const changeLikeCount = () => {
    if (answers != null) {
      const updatedAnswers = [...answers]

      updatedAnswers[index] = {
        ...updatedAnswers[index],
        likeCount:
          updatedAnswers[index].isLiked === true
            ? +updatedAnswers[index].likeCount - 1
            : +updatedAnswers[index].likeCount + 1,
        isLiked: updatedAnswers[index].isLiked !== true
      }

      setAnswers(updatedAnswers)
    }
  }

  return (
    <ListAnswerWrapper
      onClick={() => {
        navigate({ search: `?answerId=${answerId}` }, { state: { index } })
      }}
    >
      <EmotionWrapper>
        <EmotionIcon emotion={emotion} width={24} />
        <EmotionText text={emotionList[emotion - 1].description} _backgroundColor="side100" />
      </EmotionWrapper>

      <TextP
        typo="b2"
        style={{
          lineHeight: '20px',
          overflow: 'hidden',
          wordBreak: 'break-word',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {`${content}`}
      </TextP>

      <HeartWrapper>
        <IconButton
          buttonType="noFilled"
          _width="24px"
          _height="32px"
          _onClick={(e) => {
            e.stopPropagation()
            postLikesMutate({ answerId })
            changeLikeCount()
          }}
        >
          {isLiked ? (
            <Icons.Heart width="20" height="20" fill={Theme.colors.error.error300} />
          ) : (
            <Icons.Heart width="20" height="20" stroke={Theme.colors.gray.gray6} />
          )}
        </IconButton>

        {likeCount !== 0 && (
          <TextP typo="c_b" textColor="gray7">
            {likeCount}
          </TextP>
        )}
      </HeartWrapper>
    </ListAnswerWrapper>
  )
}

const { TextP } = style

const ListAnswerWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  align-items: flex-start;
  flex-direction: column;
  flex-grow: 1;

  height: 148px;
  padding: 16px 20px 8px;

  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 12px;
  cursor: pointer;

  @media all and (min-width: 768px) {
    width: 48%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`

const EmotionWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  gap: 8px;

  margin-bottom: 8px;
`

const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  margin: auto 0 0 auto;
`

export default ListAnswer
