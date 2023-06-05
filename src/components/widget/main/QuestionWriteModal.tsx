import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// store
import useQuestionStore from 'stores/useQuestionStore'
import useAnswerStore from 'stores/useAnswerStore'

// components
import { Button, EmotionIcon, EmotionModal, Modal, Toggle } from 'components'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'
// components - style
import { DropdownItem, DropdownList } from 'components/core/dropdown/style'

// hooks
import { useQueryClient } from 'react-query'
import { useGetAnswerQuery, useGetQuestionQuery } from 'hooks/queries'
import { useUpdateAnswerMutation, usePostAnswerMutation, useDeleteAnswerMutation } from 'hooks/mutations'

// utils
import { formatStringDate } from 'utils/date'

// assets
import Icon from 'assets/icons'

const QuestionWriteModal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const date = new URLSearchParams(window.location.search).get('date')
  const MAX_LENGTH = 500
  const MIN_LENGTH = 4

  // store
  const { isEmotionModalOn, setIsEmotionModal } = useQuestionStore()
  const { emotion, setEmotion } = useAnswerStore()

  // query
  const queryClient = useQueryClient()
  const { data: { data: answer = null } = {}, isSuccess } = useGetAnswerQuery(
    formatStringDate(new Date(date as string))
  )
  const { data: { data: question = null } = {} } = useGetQuestionQuery(formatStringDate(new Date(date as string)))

  // mutation
  const { mutate: postAnswerMutate } = usePostAnswerMutation()
  const { mutate: editAnswerMutate } = useUpdateAnswerMutation()
  const { mutate: deleteAnswerMutate } = useDeleteAnswerMutation()

  const backUrl = location.hash.split('?date')[1]

  const [cancel, setCancel] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [menu, setMenu] = useState<boolean>(false)
  const [text, setText] = useState<string>(answer?.content ?? '')
  const [shareToggle, setShareToggle] = useState<boolean>(false)
  const [editable, setEditable] = useState<boolean>(false)

  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(true)

  useEffect(() => {
    if (isSuccess) {
      setAlreadyAnswered(Boolean(answer?.content))
      setText(answer?.content ?? '')
    }
  }, [isSuccess])

  useEffect(() => {
    // 감정 선택 모달 열리기
    if (!alreadyAnswered) setIsEmotionModal(true)

    // 답변이 있으면 감정 아이콘 세팅
    // TODO: 첫번째 들어갔을 때 안됨
    setEmotion(answer?.emotion ?? null)

    setEditable(!alreadyAnswered)
  }, [alreadyAnswered])

  return (
    <>
      <Modal>
        <ModalWrapper flex="center" _alignItems="start">
          <ModalInnerWrapper flex="start" direction="column" _height="100%">
            <ModalHeader flex="between">
              <ButtonWrapper
                flex="start"
                onClick={() => {
                  if (!editable) navigate(backUrl)
                }}
              >
                {!editable && <Icon.ArrowLeft width={20} stroke={theme.colors.gray.gray6} />}
              </ButtonWrapper>
              <Grid
                flex="center"
                _width="44px"
                _height="44px"
                onClick={() => {
                  if (!alreadyAnswered) setIsEmotionModal(true)
                }}
              >
                <EmotionIcon emotion={emotion} width={36} fill={theme.colors.logo} stroke={theme.colors.logo} />
              </Grid>
              <ButtonWrapper
                flex="end"
                onClick={() => {
                  if (editable) setCancel(true)
                  else setMenu(!menu)
                }}
              >
                {editable ? (
                  <Icon.Close width={24} stroke={theme.colors.gray.gray6} />
                ) : (
                  <>
                    <Icon.More width={4} stroke={theme.colors.gray.gray6} />
                    {menu && (
                      <DropdownList dropdownSize="small" listLength="104px" direction="down">
                        <DropdownItem
                          dropdownSize="small"
                          onClick={() => {
                            setEditable(true)
                          }}
                        >
                          <TextSpan typo="b2" textColor="black">
                            수정
                          </TextSpan>
                        </DropdownItem>
                        <DropdownItem
                          dropdownSize="small"
                          onClick={() => {
                            setDeleteModal(true)
                          }}
                        >
                          <TextSpan typo="b2" textColor="black">
                            삭제
                          </TextSpan>
                        </DropdownItem>
                      </DropdownList>
                    )}
                  </>
                )}
              </ButtonWrapper>
            </ModalHeader>
            <QuestionWrapper flex="start" direction="column" _gap="18px">
              <Grid flex="start" direction="column" _gap="10px">
                <Grid>
                  {question?.title?.split('\\n')?.map((line: string) => (
                    <TextP key={line} typo="h6" textColor="logo" textAlign="center" wordBreak="keep-all">
                      {line}
                    </TextP>
                  ))}
                </Grid>
                <Grid>
                  {question?.phrase?.split('\\n')?.map((line: string) => (
                    <TextP key={line} typo="b2" textColor="gray5" textAlign="center" wordBreak="keep-all">
                      {line}
                    </TextP>
                  ))}
                </Grid>
              </Grid>
              <TextP typo="c" textColor="side500" textAlign="center">
                {`${question?.date?.[0] as string}년 ${question?.date?.[1] as string}월 ${
                  question?.date?.[2] as string
                }일`}
              </TextP>
            </QuestionWrapper>
            <StrikeThrough />
            <AnswerTextArea
              placeholder="여기에 기록해주세요!"
              value={text}
              maxLength={MAX_LENGTH}
              onChange={(e) => {
                setText(e.target.value)
              }}
              disabled={!editable}
            />
            <FooterWrapper flex="start" direction="column">
              <Grid flex="end" _height="14px">
                <TextP typo="c_b" textColor="gray6">
                  {text?.length} / {MAX_LENGTH}
                </TextP>
              </Grid>
              {editable && (
                <Grid flex="between" _alignItems="start" _padding="10px 0 0 0 ">
                  <Toggle label={['나혼자 보기', '타인과 공유']} value={shareToggle} setValue={setShareToggle} />
                  <Button
                    buttonType="noFilled"
                    contentType="text"
                    text="완료"
                    _height="100%"
                    textColor={text?.length < MIN_LENGTH ? 'gray6' : 'logo'}
                    _disabled={text?.length < MIN_LENGTH}
                    _onClick={() => {
                      if (!alreadyAnswered)
                        postAnswerMutate(
                          { date: date as string, content: text, emotion: emotion as number },
                          {
                            onSuccess: async () => {
                              await queryClient.invalidateQueries('answer')
                              navigate(backUrl)
                            },
                            onError: (error) => {
                              console.log(error)
                            }
                          }
                        )
                      editAnswerMutate(
                        { date: date as string, content: text },
                        {
                          onSuccess: async () => {
                            await queryClient.invalidateQueries('answer')
                            navigate(backUrl)
                          },
                          onError: (error) => {
                            console.log(error)
                          }
                        }
                      )
                    }}
                  />
                </Grid>
              )}
            </FooterWrapper>
          </ModalInnerWrapper>
        </ModalWrapper>
        {Boolean(isEmotionModalOn) && <EmotionModal />}
      </Modal>

      {/* modal */}
      {cancel && (
        <Modal _width="100%" _maxWidth="325px" _height="174px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <Grid flex="between" direction="column" _height="100%">
            <Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <TextP typo="b1" textColor="black">
                작성을 취소하고 나가시겠어요?
              </TextP>
              <TextP typo="b2" textColor="gray7">
                작성한 답변은 초기화돼요
              </TextP>
            </Grid>
            <Grid flex="between">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                contentType="text"
                textColor="logo"
                text="아니오"
                _onClick={() => {
                  setCancel(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                contentType="text"
                textColor="logo"
                text="나갈래요"
                _onClick={() => {
                  navigate(backUrl)
                }}
              ></Button>
            </Grid>
          </Grid>
        </Modal>
      )}

      {deleteModal && (
        <Modal _width="100%" _maxWidth="325px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <Grid flex="between" direction="column" _height="100%">
            <Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <TextP typo="b1" textColor="black">
                답변을 삭제할까요?
              </TextP>
            </Grid>
            <Grid flex="between">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                contentType="text"
                textColor="logo"
                text="취소"
                _onClick={() => {
                  setDeleteModal(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                contentType="text"
                textColor="logo"
                text="삭제하기"
                _onClick={() => {
                  deleteAnswerMutate(
                    { date: date as string },
                    {
                      onSuccess: async () => {
                        await queryClient.invalidateQueries('answer')
                        navigate(backUrl)
                      },
                      onError: (error) => {
                        console.log(error)
                      }
                    }
                  )
                }}
              ></Button>
            </Grid>
          </Grid>
        </Modal>
      )}
    </>
  )
}

const { Grid, TextP, TextSpan } = style

const ModalWrapper = styled(Grid)`
  width: 100vw;
  height: 100vh;
  z-index: 9000;
  background-color: ${({ theme }) => theme.colors.side.side100};
`
const ModalInnerWrapper = styled(Grid)`
  max-width: 1200px;
  margin: 0 20px;
`

const ModalHeader = styled(Grid)`
  margin: 20px 0;
  align-items: flex-start;
`

const QuestionWrapper = styled(Grid)`
  max-width: 300px;
  margin: 20px 0 60px 0;
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
  outline-color: ${({ theme }) => theme.colors.side.side100};
  background-color: inherit;
  line-height: 28px;

  overflow-y: overlay;

  @media screen and (max-width: 767px) {
    line-height: 24px;
  }
`
const FooterWrapper = styled(Grid)`
  margin-bottom: 46px;
`
const ButtonWrapper = styled(Grid)`
  width: 90px;
  position: relative;
  svg {
    cursor: pointer;
  }
`

export default QuestionWriteModal
