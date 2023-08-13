import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

// components
import { EmotionIcon, Modal, EmotionText } from 'components'
import AccuseModal from './AccuseModal'

// styles
import style from 'styles/styled-components/styled'

// hooks
import { usePostLikesMutation } from 'hooks'

// assets
import Icon from 'assets/icons'

// data
import { emotionList } from 'data/emotion'

// stores
import useCommunicationStore from 'stores/useCommunicationStore'

const AnswerModal = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const answerId = new URLSearchParams(window.location.search).get('answerId')

  const location = useLocation()
  const data = {
    answerId: location.state.answerId,
    emotion: location.state.emotion,
    content: location.state.content,
    likeCount: location.state.likeCount,
    isLiked: location.state.likeCount
  }

  // store
  const { questionIdx, questions } = useCommunicationStore()

  const [accuse, setAccuse] = useState<boolean>(false)
  const [text, setText] = useState<string>(data.content ?? '')

  useEffect(() => {
    setText(data.content ?? '')
  }, [data])

  const { mutate: postLikesMutate } = usePostLikesMutation()

  return (
    <>
      <Modal>
        <ModalWrapper flex="center" _alignItems="start">
          <ModalInnerWrapper flex="start" direction="column" _height="100%">
            {/* 헤더 */}
            <ModalHeader flex="between">
              <ButtonWrapper flex="start">
                <Icon.ArrowLeft
                  onClick={() => {
                    navigate(-1)
                  }}
                  width={24}
                  height={24}
                  stroke={theme.colors.gray.gray6}
                />
              </ButtonWrapper>
              <Grid flex="center" _gap="4px">
                <EmotionIcon emotion={data.emotion} width={44} />
                {data.emotion != null && <EmotionText text={emotionList[data.emotion - 1].description} />}
              </Grid>
              <ButtonWrapper flex="end">
                <>
                  <Icon.Siren
                    width={24}
                    stroke={theme.colors.gray.gray6}
                    onClick={() => {
                      setAccuse(true)
                    }}
                  />
                </>
              </ButtonWrapper>
            </ModalHeader>

            {/* 질문 */}
            <QuestionWrapper
              flex="start"
              direction="column"
              _gap="18px"
              style={{
                height: 'auto',
                margin: '21px 0 24px',
                overflow: 'visible'
              }}
            >
              <Grid flex="start" direction="column" _gap="10px">
                <Grid flex="center" direction="column" _gap="4px">
                  {questions[questionIdx]?.title?.split('\n')?.map((line: string) => (
                    <TextP key={line} typo="b1_b" textColor="logo" textAlign="center" wordBreak="keep-all">
                      {line}
                    </TextP>
                  ))}
                </Grid>
                <Grid flex="center" direction="column" _gap="4px">
                  {questions[questionIdx]?.phrase?.split('\n')?.map((line: string) => (
                    <TextP key={line} typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
                      {line}
                    </TextP>
                  ))}
                </Grid>
              </Grid>
              <TextP typo="c" textColor="side500" textAlign="center">
                {`${questions[questionIdx]?.date[0].toString()}년 ${questions[
                  questionIdx
                ]?.date[1].toString()}월 ${questions[questionIdx]?.date[2].toString()}일`}
              </TextP>
            </QuestionWrapper>

            <StrikeThrough />

            {/* 기록 */}
            <AnswerTextArea placeholder="여기에 기록해주세요!" value={text} disabled={true} />

            {/* 푸터 */}
            <FooterWrapper flex="start" direction="column">
              <Grid flex="end" _height="14px" _gap="2px">
                <Icon.Heart
                  width={24}
                  height={24}
                  style={{ cursor: 'pointer' }}
                  stroke={(data.isLiked as boolean) ? null : theme.colors.gray.gray6}
                  fill={(data.isLiked as boolean) ? theme.colors.error.error300 : 'transparent'}
                  onClick={async () => {
                    postLikesMutate(
                      { answerId: Number(answerId) },
                      {
                        onSuccess: async () => {
                          // await queryClient.invalidateQueries('answer')
                        },
                        onError: (error) => {
                          console.log(error)
                        }
                      }
                    )
                  }}
                />
                <TextP typo="c_b" textColor="gray6">
                  {data.likeCount}
                </TextP>
              </Grid>
            </FooterWrapper>
          </ModalInnerWrapper>
        </ModalWrapper>
        {Boolean(accuse) && (
          <AccuseModal
            handleCancel={() => {
              setAccuse(false)
            }}
          />
        )}
      </Modal>
    </>
  )
}

const { Grid, TextP } = style

const ModalWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.side.side100};
`
const ModalInnerWrapper = styled(Grid)`
  max-width: 1200px;
  margin: 0 20px;
`

const ModalHeader = styled(Grid)`
  margin: 21px 0 12px;
  align-items: flex-start;
`

const QuestionWrapper = styled(Grid)`
  transition: 0.3s;
`

const StrikeThrough = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
  border: 1px ${({ theme }) => theme.colors.side.side300} solid;
`

const AnswerTextArea = styled.textarea`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  border: none;
  resize: none;
  outline: none;
  background-color: inherit;
  line-height: 28px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.gray.black};
  :disabled {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray.black};
  }

  overflow-y: overlay;

  @media screen and (max-width: 767px) {
    line-height: 24px;
    font-size: 14px;
  }
`
const FooterWrapper = styled(Grid)`
  margin-bottom: 46px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
  }
`
const ButtonWrapper = styled(Grid)`
  width: 90px;
  position: relative;
  svg {
    cursor: pointer;
  }
`

export default AnswerModal
