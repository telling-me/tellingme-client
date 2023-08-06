/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, Modal } from 'components/core'

// store

// ani
import { modalAni } from 'styles/ani'
import { usePostAccuseMutation } from 'hooks/mutations/answer'

// hooks

// utils

const accuseReason = ['욕설', '음란물', '광고', '개인정보 침해', '낚시성 콘텐츠', '기타']

interface IAccuseModal {
  handleCancel?: () => void
}

const AccuseModal = ({ handleCancel }: IAccuseModal) => {
  const [reason, setReason] = useState<number | null>(null)
  const answerId = new URLSearchParams(window.location.search).get('answerId')

  const [success, setSuccess] = useState<boolean>(false)
  const [existed, setExisted] = useState<boolean>(false)

  const { mutate: postAccuseMutate } = usePostAccuseMutation()

  return (
    <ModalWrapper flex="center" variants={modalAni} initial="init" animate="ani" exit="exit">
      <ModalInnerWrapper flex="between" direction="column">
        <Grid flex="center" direction="column" _gap="8px">
          <TextP typo="b1">답변 신고 사유를 선택해주세요</TextP>
          <TextP typo="b2" textColor="gray5">
            허위 신고 시 서비스 이용 제한을
          </TextP>
          <TextP typo="b2" textColor="gray5">
            받을 수 있어요
          </TextP>
        </Grid>
        <ReasonWrapper selected={reason}>
          {accuseReason.map((accuse, idx) => {
            return (
              <Button
                key={idx}
                buttonType="tertiary"
                _width="160px"
                _height="55px"
                textSize="h6"
                text={accuse}
                textColor="gray7"
                _active={reason === idx}
                _onClick={() => {
                  setReason(idx)
                }}
              />
            )
          })}
        </ReasonWrapper>
        <Grid flex="center" _gap="15px">
          <Button
            buttonType="tertiary"
            _width="135px"
            _height="55px"
            textSize="h6"
            text="취소"
            textColor="logo"
            _onClick={() => {
              handleCancel?.()
            }}
          />
          <Button
            buttonType="secondary"
            _width="135px"
            _height="55px"
            textSize="h6"
            text="확인"
            textColor={reason === null ? 'gray4' : 'logo'}
            _onClick={() => {
              postAccuseMutate(
                { answerId: Number(answerId), reason: reason as number },
                {
                  onSuccess: (res) => {
                    if (res.data?.status === 5000) setExisted(true)
                    if (res.data?.status === 200) setSuccess(true)
                  },
                  onError: (error) => {
                    console.log(error)
                  }
                }
              )
            }}
            _disabled={reason === null}
          />
        </Grid>
      </ModalInnerWrapper>
      {/* modal */}
      {success && (
        <Modal _width="100%" _maxWidth="425px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <style.TextP typo="b1">신고가 접수되었어요!</style.TextP>
          <Button
            buttonType="secondary"
            text="확인"
            textSize="h6"
            textColor="logo"
            _width="100%"
            _height="55px"
            _margin="auto 0 0 0"
            _onClick={() => {
              setSuccess(false)
            }}
          />
        </Modal>
      )}
      {existed && (
        <Modal _width="100%" _maxWidth="425px" _height="150px" _borderRadius="20px" _padding="30px 20px 20px 20px">
          <style.TextP typo="b1">이미 신고된 답변입니다.</style.TextP>
          <Button
            buttonType="secondary"
            text="확인"
            textSize="h6"
            textColor="logo"
            _width="100%"
            _height="55px"
            _margin="auto 0 0 0"
            _onClick={() => {
              setExisted(false)
            }}
          />
        </Modal>
      )}
    </ModalWrapper>
  )
}

const { Grid, TextP } = style

const ModalWrapper = styled(style.Grid)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9500;
  background-color: rgba(24, 24, 24, 0.28);
  backdrop-filter: blur(6px);

  @media all and (max-width: 767px) {
    align-items: end;
  }
`

const ModalInnerWrapper = styled(style.Grid)`
  width: 425px;
  height: 407px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 20px;
  padding: 30px 20px 20px 20px;
  transition: 0.2s;

  @media all and (max-width: 767px) {
    width: 100%;
    height: 403px;
    padding: 42px 20px 8px 20px;
    border-radius: 20px 20px 0 0;
  }
`

const ReasonWrapper = styled(style.Grid)<{ selected: number | null }>`
  max-width: 335px;
  height: 189px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);

  > div > svg:nth-child(1) {
    opacity: 0.5;
  }

  ${({ selected }) =>
    selected !== null &&
    css`
      > div:nth-child(${selected}) > svg:nth-child(1) {
        opacity: 1;
      }
    `}
`

export default AccuseModal
