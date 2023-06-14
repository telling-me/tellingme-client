import React from 'react'
import styled, { css } from 'styled-components'

interface IChoiceChips {
  chipText: string
  _disabled?: boolean
  _margin?: string
  _active?: boolean
  _onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ChoiceChips = ({ chipText, _disabled = false, _margin, _active = false, _onClick }: IChoiceChips) => {
  return (
    <ChoiceChipsComponent _margin={_margin} disabled={_disabled} _active={_active} onClick={_onClick}>
      {chipText}
    </ChoiceChipsComponent>
  )
}

const ChoiceChipsComponent = styled.button<{ _margin?: string; _active: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  border-radius: 20px;

  cursor: pointer;

  ${(props) => css`
    background-color: ${props.theme.colors.side.side200};
    color: ${props.theme.colors.gray.gray7};

    ${props.theme.typo.body.b2}

    &:hover {
      color: ${props.theme.colors.side.side500};
    }

    &:active {
      background-color: ${props.theme.colors.side.side500};
      color: ${props.theme.colors.side.side200};
    }

    &:disabled {
      background-color: ${props.theme.colors.gray.gray1};
      color: ${props.theme.colors.gray.gray4};

      cursor: default;
    }
  `}

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
  ${({ _active, theme }) =>
    _active &&
    css`
      background-color: ${theme.colors.side.side500};
      color: ${theme.colors.side.side200};

      &:hover {
        color: ${theme.colors.side.side200};
      }
    `}
`

export default ChoiceChips
