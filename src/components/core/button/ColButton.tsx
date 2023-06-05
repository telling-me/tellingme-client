import React from 'react'

// type
import type { INotOnlyButton } from './type'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

/**
 * 아이콘과 텍스트의 flex-direction이 column인 버튼
 * @param {string} text - (필수) 버튼에 들어갈 텍스트
 * @param {boolean} _active - (필수) 버튼이 클릭된 상태면 true, 아니면 false
 * @param {MouseEventHandler<HTMLButtonElement>} _onClick - (필수) onClick
 * @param {React.ReactNode} children - (필수) 버튼에 들어갈 아이콘
 */

const ColButton = ({ text, _active, _onClick, children }: INotOnlyButton) => {
  return (
    <ColButtonComponent _active={_active} onClick={_onClick}>
      {children}

      <style.TextP typo="h6" textColor="gray7">
        {text}
      </style.TextP>
    </ColButtonComponent>
  )
}

const ColButtonComponent = styled.button<{ _active: boolean }>`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 15px;

  background-color: ${({ _active, theme }) => (_active ? theme.colors.side.side300 : theme.colors.side.side200)};
  border-radius: 20px;

  width: 103px;
  height: 114px;

  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.shadow1};
  }
`

export default ColButton
