import React from 'react'

// type
import type { INotOnlyButton } from './type'

// components
import styled, { css } from 'styled-components'
import RowButton from './RowButton'

/**
 * 눌러진 상태가 아니라면 row 버튼이, 눌러진 상태라면 row버튼 아래에 input이 있는 버튼
 * @param {string} text - (필수) 버튼에 들어갈 텍스트
 * @param {boolean} _active - (필수) 버튼이 클릭된 상태면 true, 아니면 false
 * @param {MouseEventHandler<HTMLButtonElement>} _onClick - (필수) onClick
 * @param {React.ReactNode} children - (필수) 버튼에 들어갈 아이콘
 * @param {string} _value - (선택) input의 value값
 * @param {Dispatch<SetStateAction<string>>} setValue - (선택) input에서 onChange를 통해 _value를 바꿀 수 있도록 하는 것
 */

const InputButton = ({ text, _active, _onClick, children, _value, setValue }: INotOnlyButton) => {
  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    if (setValue !== undefined) {
      setValue(e.target.value)
    }
  }

  return (
    <InputButtonComponent _active={_active}>
      <RowButton text={text} _active={_active} _onClick={_onClick}>
        {children}
      </RowButton>

      {_active && <InputButtonInput placeholder="직접 입력..." value={_value} onChange={handleChange} />}
    </InputButtonComponent>
  )
}

const InputButtonComponent = styled.div<{ _active: boolean }>`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 24px;

  cursor: pointer;

  ${({ _active, theme }) =>
    _active &&
    css`
      background-color: ${theme.colors.side.side300};
      border-radius: 20px;

      height: 102px;
      padding: 18.5px 0;

      button {
        padding: 0 24px;
      }
    `}

  @media all and (min-width: 768px) {
    width: 205px;
  }

  @media all and (max-width: 767px) {
    width: 255px;
  }
`

const InputButtonInput = styled.input`
  ${({ theme }) => `background-color: ${theme.colors.side.side300};`}

  outline: none;

  width: calc(100% - 48px);

  @media all and (min-width: 768px) {
    padding-left: 47px;
  }

  @media all and (max-width: 767px) {
    padding-left: 72px;
  }
`

export default InputButton
