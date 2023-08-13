/* eslint-disable @typescript-eslint/no-unused-vars */
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
import {
  useUpdateAnswerMutation,
  usePostAnswerMutation,
  useDeleteAnswerMutation,
  useGetMyAnswerQuery,
  useGetQuestionQuery,
  useWindowSize,
  useCalculateDiff
} from 'hooks'

// utils
import { formatStringDate } from 'utils/date'

// assets
import Icon from 'assets/icons'
import EmotionText from './EmotionText'
import { emotionList } from 'data/emotion'

const QuestionWriteModal = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const date = new URLSearchParams(window.location.search).get('date')
  const windowWidth = useWindowSize().width
  const MAX_LENGTH = 300
  const MIN_LENGTH = 4

  // store
  const { isEmotionModalOn, setIsEmotionModal } = useQuestionStore()
  const { emotion, setEmotion } = useAnswerStore()

  // query
  const queryClient = useQueryClient()
  const { data: { data: answer = null } = {}, isSuccess: answerSuccess } = useGetMyAnswerQuery(
    formatStringDate(new Date(date as string))
  )
  const { data: { data: question = null } = {}, isSuccess: questionSuccess } = useGetQuestionQuery(
    formatStringDate(new Date(date as string))
  )

  // mutation
  const { mutate: postAnswerMutate } = usePostAnswerMutation()
  const { mutate: editAnswerMutate } = useUpdateAnswerMutation()
  const { mutate: deleteAnswerMutate } = useDeleteAnswerMutation()

  const backUrl = location.hash.split('?date')[1]

  // modal state
  const [cancel, setCancel] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [fold, setFold] = useState<boolean>(false)
  const [editModal, setEditModal] = useState<boolean>(false)
  const [toggleModal, setToggleModal] = useState<boolean>(false)

  const [menu, setMenu] = useState<boolean>(false)
  const [text, setText] = useState<string>(answer?.content ?? '')
  const [shareToggle, setShareToggle] = useState<boolean>(false)
  const [editable, setEditable] = useState<boolean>(false)

  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(true)

  const [diffDays, setDiffDays] = useState<number>()

  const handleSubmit = () => {
    postAnswerMutate(
      { date: date as string, content: text, emotion: emotion as number, isPublic: shareToggle },
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
  }

  useEffect(() => {
    if (answerSuccess) {
      setAlreadyAnswered(Boolean(answer?.content))
      setText(answer?.content ?? '')
      setShareToggle(answer?.isPublic ?? false)
    }
  }, [answerSuccess])

  useEffect(() => {
    if (questionSuccess) {
      setDiffDays(useCalculateDiff(question?.date))
    }
  }, [questionSuccess])

  useEffect(() => {
    // 답변이 있으면 감정 아이콘 세팅
    if (answer?.emotion === true) {
      setEmotion(answer?.emotion)
    }

    setEditable(!alreadyAnswered)
  }, [alreadyAnswered])

  useEffect(() => {
    setEmotion(answer?.emotion ?? null)
    setShareToggle(answer?.isPublic ?? false)
  }, [answer])

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
                    if (editable) setCancel(true)
                    else navigate(backUrl)
                  }}
                  width={24}
                  height={24}
                  stroke={theme.colors.gray.gray6}
                />
              </ButtonWrapper>
              <Grid
                flex="center"
                _gap="4px"
                style={{ cursor: alreadyAnswered ? 'default' : 'pointer' }}
                onClick={() => {
                  if (!alreadyAnswered) setIsEmotionModal(true)
                }}
              >
                <EmotionIcon emotion={emotion} width={44} />
                {emotion != null && <EmotionText text={emotionList[emotion - 1].description} />}
              </Grid>
              <ButtonWrapper flex="end">
                {editable ? (
                  fold ? (
                    <Icon.CaretDown
                      width={24}
                      height={24}
                      stroke={theme.colors.gray.gray6}
                      onClick={() => {
                        setFold(!fold)
                      }}
                    />
                  ) : (
                    <Icon.CaretUp
                      width={24}
                      height={24}
                      stroke={theme.colors.gray.gray6}
                      onClick={() => {
                        setFold(!fold)
                      }}
                    />
                  )
                ) : (
                  <>
                    <Icon.More
                      width={24}
                      stroke={theme.colors.gray.gray6}
                      onClick={() => {
                        setMenu(!menu)
                      }}
                    />
                    {menu && (
                      <DropdownList dropdownSize="small" listLength="80" direction="down" style={{ width: 'auto' }}>
                        <DropdownItem
                          dropdownSize="small"
                          onClick={() => {
                            setEditable(true)
                          }}
                          style={{ textAlign: 'center', padding: '12px 20px', width: '66px' }}
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
                          style={{ textAlign: 'center', padding: '12px 20px', width: '66px' }}
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

            {/* 질문 */}
            <QuestionWrapper
              flex="start"
              direction="column"
              _gap="18px"
              style={{
                height: fold ? 0 : 'auto',
                margin: fold ? 0 : '21px 0 24px',
                overflow: fold ? 'hidden' : 'visible'
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
                {`${question?.date?.[0] as string}년 ${question?.date?.[1] as string}월 ${
                  question?.date?.[2] as string
                }일`}
              </TextP>
            </QuestionWrapper>

            <StrikeThrough />

            {/* 기록 */}
            <AnswerTextArea
              placeholder="여기에 기록해주세요!"
              value={text}
              maxLength={MAX_LENGTH}
              onChange={(e) => {
                if (e.target.value?.length > MAX_LENGTH) setText(e.target.value.slice(0, MAX_LENGTH))
                else setText(e.target.value)
              }}
              disabled={!editable}
            />

            {/* 푸터 */}
            <FooterWrapper flex="start" direction="column">
              <Grid flex="end" _height="14px">
                <TextP typo="c_b" textColor="gray6">
                  {text?.length} / {MAX_LENGTH}
                </TextP>
              </Grid>
              {editable && (
                <Grid flex="between" _alignItems="start" _padding="10px 0 0 0 ">
                  <Toggle
                    label="공개"
                    value={shareToggle}
                    setValue={setShareToggle}
                    _disabled={diffDays != null && diffDays > 3}
                    _onClick={() => {
                      setToggleModal(true)
                    }}
                  />
                  <Button
                    buttonType="noFilled"
                    text="완료"
                    _height="100%"
                    textColor={text?.length < MIN_LENGTH ? 'gray6' : 'logo'}
                    textSize={windowWidth < 768 ? 'b1_b' : 'h6_b'}
                    _disabled={text?.length < MIN_LENGTH}
                    _onClick={() => {
                      if (!alreadyAnswered) setIsEmotionModal(true)
                      else setEditModal(true)
                    }}
                  />
                </Grid>
              )}
            </FooterWrapper>
          </ModalInnerWrapper>
        </ModalWrapper>
        {Boolean(isEmotionModalOn) && <EmotionModal handleSubmit={handleSubmit} />}
      </Modal>

      {/* modal */}
      {cancel && (
        <Modal _width="100%" _maxWidth="425px" _height="174px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <Grid flex="between" direction="column" _height="100%">
            <Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <TextP typo="b1" textColor="black">
                작성을 취소하고 나가시겠어요?
              </TextP>
              <TextP typo="b2" textColor="gray7">
                작성한 답변은 초기화돼요
              </TextP>
            </Grid>
            <Grid flex="center" _gap="15px">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                textColor="logo"
                textSize="h6"
                text="아니오"
                _onClick={() => {
                  setCancel(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                textColor="logo"
                textSize="h6"
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
        <Modal _width="100%" _maxWidth="425px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <Grid flex="between" direction="column" _height="100%">
            <Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <TextP typo="b1" textColor="black">
                답변을 삭제할까요?
              </TextP>
            </Grid>
            <Grid flex="center" _gap="15px">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                textColor="logo"
                textSize="h6"
                text="취소"
                _onClick={() => {
                  setDeleteModal(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                textColor="logo"
                textSize="h6"
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
      {editModal && (
        <Modal _width="100%" _maxWidth="425px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <Grid flex="between" direction="column" _height="100%">
            <Grid flex="center" direction="column" _gap="8px" _alignItems="center">
              <TextP typo="b1" textColor="black">
                답변을 수정할까요?
              </TextP>
            </Grid>
            <Grid flex="center" _gap="15px">
              <Button
                _width="135px"
                _height="55px"
                buttonType="tertiary"
                textColor="logo"
                textSize="h6"
                text="취소"
                _onClick={() => {
                  setEditModal(false)
                }}
              ></Button>
              <Button
                _width="135px"
                _height="55px"
                buttonType="secondary"
                textColor="logo"
                textSize="h6"
                text="수정하기"
                _onClick={() => {
                  editAnswerMutate(
                    { date: date as string, content: text, isPublic: shareToggle },
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
      {toggleModal && (
        <Modal _width="100%" _maxWidth="425px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <style.TextP typo="b1">3일 이상 지난 답변은 바꿀 수 없어요.</style.TextP>
          <Button
            buttonType="secondary"
            text="확인"
            textSize="h6"
            textColor="logo"
            _width="100%"
            _height="55px"
            _margin="auto 0 0 0"
            _onClick={() => {
              setToggleModal(false)
            }}
          />
        </Modal>
      )}
    </>
  )
}

const { Grid, TextP, TextSpan } = style

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

export default QuestionWriteModal
