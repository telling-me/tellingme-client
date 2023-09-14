import React, { useState } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, CheckSquare, TwoButtonModal } from 'components'

// data
import { SETTING_WITHDRAWAL_DOCS } from 'data/docs'

// hooks
import { useDeleteUser, useGetUserInfoQuery } from 'hooks'

// assets
import Icons from 'assets/icons'

// configs
// import { APPLE_WITHDRAW_URL } from 'configs/apple'

const Withdrawal = () => {
  const [agree, setAgree] = useState(false)
  const [open, setOpen] = useState(false)

  const { data: { data: info = null } = {} } = useGetUserInfoQuery()
  const { mutate } = useDeleteUser()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const _onClick = () => {
    mutate({ code: '', socialType: info?.socialLoginType })
  }

  return (
    <WithdrawalWrapper>
      <TextP typo="b1_b" textColor="gray7" _margin="0 0 20px 0">
        회원 탈퇴 전 반드시 확인해주세요!
      </TextP>

      <Icons.SadDuei />

      <WithdrawalContentBox>
        <WithdrawalContent>
          {SETTING_WITHDRAWAL_DOCS.map((v, i) => {
            return (
              <TextP key={i} typo={v._typo} textColor="black" _margin={v._margin}>
                {v.content}
              </TextP>
            )
          })}
        </WithdrawalContent>
      </WithdrawalContentBox>

      <CheckWrapper>
        <CheckSquare checkSize="small" _checked={agree} setChecked={setAgree} />
        <TextP typo="b1" textColor="gray7">
          (필수) 위 내용을 모두 확인하였습니다.
        </TextP>
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
        <TwoButtonModal
          mainText="정말로 텔링미를 떠나실건가요?"
          subText="그동안 작성하신 답변들이 모두 사라져요.."
          rightBtnText="떠나기"
          leftBtnOnClick={handleClose}
          rightBtnOnClick={_onClick}
        />
      )}
    </WithdrawalWrapper>
  )
}

const { TextP } = style

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

export default Withdrawal
