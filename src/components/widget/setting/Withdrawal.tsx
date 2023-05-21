import React, { useState } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, CheckSquare } from 'components'

// data
import { SETTING_WITHDRAWAL_DOCS } from 'data/docs'

const Withdrawal = () => {
  const [agree, setAgree] = useState(false)

  return (
    <WithdrawalWrapper>
      <style.TextP typo="b1_b" textColor="gray7">
        회원 탈퇴 전 반드시 확인해주세요!
      </style.TextP>

      <WithdrawalContent>
        <style.TextP typo="c" textColor="black">
          {SETTING_WITHDRAWAL_DOCS}
        </style.TextP>
      </WithdrawalContent>

      <CheckWrapper>
        <CheckSquare checkSize="small" _checked={agree} setChecked={setAgree} />
        <style.TextP typo="b1" textColor="gray7">
          (필수) 위 내용을 모두 확인하였습니다.
        </style.TextP>
      </CheckWrapper>

      <Button
        buttonType="secondary"
        contentType="text"
        text="탈퇴하기"
        textSize="h6"
        textColor={!agree ? 'gray4' : 'logo'}
        _width="100%"
        _padding="16px 0"
        _disabled={!agree}
      />
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

const WithdrawalContent = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.side.side200};
`

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  margin: 12px 0px 36px 0px;
`

export default Withdrawal
