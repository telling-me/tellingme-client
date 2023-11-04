import React from 'react'
import styled, { css } from 'styled-components'

// type
import type { INotOnlyButton } from './type'

// styles
import style from 'styles/styled-components/styled'

/**
 * 아이콘과 텍스트의 flex-direction이 row인 버튼
 * @param {string} text - (필수) 버튼에 들어갈 텍스트
 * @param {boolean} _active - (필수) 버튼이 클릭된 상태면 true, 아니면 false
 * @param {MouseEventHandler<HTMLButtonElement>} _onClick - (필수) onClick
 * @param {React.ReactNode} children - (필수) 버튼에 들어갈 아이콘
 */

const RowButton = ({
  text,
  _active,
  _justifyContent = 'flex-start',
  _gap,
  _width,
  _height = '55px',
  _margin = '0px',
  _onClick,
  children
}: INotOnlyButton) => {
  return (
    <RowButtonComponent
      _active={_active}
      _justifyContent={_justifyContent}
      _gap={_gap}
      _width={_width}
      _height={_height}
      _margin={_margin}
      onClick={_onClick}
    >
      {children}

      <TextP typo="h6" textColor="gray7">
        {text}
      </TextP>
    </RowButtonComponent>
  )
}

const { TextP } = style

const RowButtonComponent = styled.button<{
  _active: boolean
  _justifyContent: string
  _gap?: string
  _width?: string
  _margin?: string
  _height: string
}>`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0 24px;
  cursor: pointer;

  ${({ _justifyContent, _gap, _width, _height, _margin, _active, theme }) => css`
    justify-content: ${_justifyContent};
    height: ${_height};
    margin: ${_margin};
    background-color: ${_active ? theme.colors.side.side300 : theme.colors.side.side200};

    &:hover {
      box-shadow: ${_active ? 'none' : theme.shadow.shadow1};
    }

    @media all and (min-width: 768px) {
      gap: ${_gap == null ? '23px' : _gap};
      width: ${_width == null ? '205px' : _width};
    }

    @media all and (max-width: 767px) {
      gap: ${_gap == null ? '48px' : _gap};
      width: ${_width == null ? '255px' : _width};
    }
  `}
`

export default RowButton
