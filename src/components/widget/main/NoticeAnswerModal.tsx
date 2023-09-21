import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

// components
import { EmotionIcon, IconButton, Modal } from 'components'
import EmotionText from './EmotionText'
import AccuseModal from './AccuseModal'

// styles
import style from 'styles/styled-components/styled'

// hooks
import { useGetAnswerQuery, useGetQuestionQuery, usePostLikesMutation } from 'hooks'

// assets
import Icon from 'assets/icons'

// data
import { emotionList } from 'data/emotion'

const NoticeAnswerModal = () => {
  const navigate = useNavigate()
  const theme = useTheme()
  const answerId = new URLSearchParams(window.location.search).get('noticeAnswerId')
  const answerDate = new URLSearchParams(window.location.search).get('answerDate')

  // query
  const { data: { data: question = null } = {} } = useGetQuestionQuery(answerDate as string)
  const { data: { data: answer = null } = {} } = useGetAnswerQuery(answerId as string)

  const [accuse, setAccuse] = useState<boolean>(false)
  const [text, setText] = useState<string>(answer?.content ?? '')
  const [like, setLike] = useState<boolean>(answer?.isLiked ?? false)
  const [likeCount, setLikeCount] = useState<number>(answer?.likeCount ?? 0)

  useEffect(() => {
    setText(answer?.content ?? '')
    setLike(answer?.isLiked ?? false)
    setLikeCount(answer?.likeCount ?? 0)
  }, [answer])

  const { mutate: postLikesMutate } = usePostLikesMutation()

  return (
    <>
      {answer != null && (
        <Modal>
          <ModalWrapper flex="center" _alignItems="start">
            <ModalInnerWrapper flex="start" direction="column" _height="100%">
              {/* 헤더 */}
              <ModalHeader flex="between">
                <IconButton
                  buttonType="noFilled"
                  _width="32px"
                  _height="32px"
                  _margin="20px auto 12px 0"
                  _onClick={() => {
                    navigate(-1)
                  }}
                >
                  <Icon.ArrowLeft width="24" height="24" stroke={theme.colors.gray.gray6} />
                </IconButton>
                <Grid flex="center" _height="100%" _alignItems="end">
                  <Grid flex="center" _gap="4px">
                    <EmotionIcon emotion={answer?.emotion} width={44} />
                    {answer?.emotion != null && <EmotionText text={emotionList[answer?.emotion - 1].description} />}
                  </Grid>
                </Grid>

                <IconButton
                  buttonType="noFilled"
                  _width="32px"
                  _height="32px"
                  _margin="20px auto 12px 0"
                  _onClick={() => {
                    setAccuse(true)
                  }}
                >
                  <>
                    <Icon.Siren width={24} stroke={theme.colors.gray.gray6} />
                  </>
                </IconButton>
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
                    {question?.title?.split('\n')?.map((line: string) => (
                      <TextP key={line} typo="b1_b" textColor="logo" textAlign="center" wordBreak="keep-all">
                        {line}
                      </TextP>
                    ))}
                  </Grid>
                  <Grid flex="center" direction="column" _gap="4px">
                    {question?.phrase?.split('\n')?.map((line: string) => (
                      <TextP key={line} typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
                        {line}
                      </TextP>
                    ))}
                  </Grid>
                </Grid>
                <TextP typo="c" textColor="side500" textAlign="center">
                  {`${question?.date?.[0]?.toString() as string}년 ${question?.date?.[1]?.toString() as string}월 ${
                    question?.date?.[2]?.toString() as string
                  }일`}
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
                    stroke={like ? null : theme.colors.gray.gray6}
                    fill={like ? theme.colors.error.error300 : 'transparent'}
                    onClick={async () => {
                      postLikesMutate(
                        { answerId: Number(answerId) },
                        {
                          onSuccess: async () => {
                            if (like) {
                              setLikeCount(likeCount - 1)
                            } else {
                              setLikeCount(likeCount + 1)
                            }
                            setLike(!like)
                          },
                          onError: (error) => {
                            console.log(error)
                          }
                        }
                      )
                    }}
                  />
                  <TextP typo="c_b" textColor="gray6">
                    {likeCount}
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
      )}
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
  margin: 0 60px;

  @media all and (max-width: 767px) {
    margin: 0 25px;
  }
`

const ModalHeader = styled(Grid)`
  button {
    position: relative;
  }
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

export default NoticeAnswerModal
