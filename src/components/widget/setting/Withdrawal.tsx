import React, { useState } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, CheckSquare, Modal } from 'components'

// data
import { SETTING_WITHDRAWAL_DOCS } from 'data/docs'

// hooks
import { useDeleteUser } from 'hooks'

const Withdrawal = () => {
  const [agree, setAgree] = useState(false)
  const [open, setOpen] = useState(false)

  const { mutate } = useDeleteUser()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const _onClick = () => {
    mutate()
  }

  return (
    <WithdrawalWrapper>
      <style.TextP typo="b1_b" textColor="gray7">
        회원 탈퇴 전 반드시 확인해주세요!
      </style.TextP>

      <WithdrawalContentBox>
        <WithdrawalContent>
          {SETTING_WITHDRAWAL_DOCS.map((v, i) => {
            return (
              <style.TextP key={i} typo={v._typo} textColor="black" _margin={v._margin}>
                {v.content}
              </style.TextP>
            )
          })}
        </WithdrawalContent>
      </WithdrawalContentBox>

      <CheckWrapper>
        <CheckSquare checkSize="small" _checked={agree} setChecked={setAgree} />
        <style.TextP typo="b1" textColor="gray7">
          (필수) 위 내용을 모두 확인하였습니다.
        </style.TextP>
      </CheckWrapper>

      <Button
        buttonType="secondary"
        text="탈퇴하기"
        textSize="h6"
        textColor={!agree ? 'gray4' : 'logo'}
        _width="100%"
        _padding="16px 0"
        _disabled={!agree}
        _onClick={handleOpen}
      />

      {open && (
        <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
          <ModalChildren>
            <ModalTexts>
              <style.TextP typo="b1" textColor="black">
                정말로 텔링미를 떠나실건가요?
              </style.TextP>
              <style.TextP typo="b2" textColor="gray7">
                그동안 작성하신 답변들이 모두 사라져요..
              </style.TextP>
            </ModalTexts>

            <ModalButtons>
              <Button
                buttonType="tertiary"
                text="취소"
                textSize="h6"
                textColor="logo"
                _width="135px"
                _padding="18px 0"
                _onClick={handleClose}
              />
              <Button
                buttonType="secondary"
                text="떠나기"
                textSize="h6"
                textColor="logo"
                _width="135px"
                _padding="18px 0"
                _onClick={_onClick}
              />
            </ModalButtons>
          </ModalChildren>
        </Modal>
      )}
    </WithdrawalWrapper>
  )
}

const WithdrawalWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;

  width: 100%;
  max-width: 425px;
  margin-top: 20px;

  p {
    white-space: pre-wrap;
    line-height: 16px;
  }
`

const WithdrawalContentBox = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
  margin-top: 20px;
  padding: 16px 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.side.side200};
`

const WithdrawalContent = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;
`

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  margin: 12px 0px 36px 0px;
`

const ModalTexts = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 8px;
`

const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
`

const ModalChildren = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 28px;
`

export default Withdrawal
