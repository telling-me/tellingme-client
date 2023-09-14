import React from 'react'

// type
import type { INotOnlyButton } from './type'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

/**
 * 아이콘과 텍스트의 flex-direction이 row인 버튼
 * @param {string} text - (필수) 버튼에 들어갈 텍스트
 * @param {boolean} _active - (필수) 버튼이 클릭된 상태면 true, 아니면 false
 * @param {MouseEventHandler<HTMLButtonElement>} _onClick - (필수) onClick
 * @param {React.ReactNode} children - (필수) 버튼에 들어갈 아이콘
 */

const RowButton = ({ text, _active, _onClick, children }: INotOnlyButton) => {
  return (
    <RowButtonComponent _active={_active} onClick={_onClick}>
      {children}

      <TextP typo="h6" textColor="gray7">
        {text}
      </TextP>
    </RowButtonComponent>
  )
}

const { TextP } = style

const RowButtonComponent = styled.button<{ _active: boolean }>`
  ${({ theme }) => theme.common.flexStart}

  background-color: ${({ _active, theme }) => (_active ? theme.colors.side.side300 : theme.colors.side.side200)};
  border-radius: 20px;

  height: 55px;
  padding: 0 24px;

  cursor: pointer;

  &:hover {
    ${({ _active, theme }) => !_active && `box-shadow: ${theme.shadow.shadow1};`}
  }

  @media all and (min-width: 768px) {
    gap: 23px;

    width: 205px;
  }

  @media all and (max-width: 767px) {
    gap: 48px;

    width: 255px;
  }
`

export default RowButton
