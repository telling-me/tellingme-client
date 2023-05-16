import React from 'react'
import styled, { css } from 'styled-components'

interface IChoiceChips {
  chipText: string
  _disabled?: boolean
  _margin?: string
}

const ChoiceChips = ({ chipText, _disabled = false, _margin }: IChoiceChips) => {
  return (
    <ChoiceChipsComponent _margin={_margin} disabled={_disabled}>
      {chipText}
    </ChoiceChipsComponent>
  )
}

const ChoiceChipsComponent = styled.button<{ _margin?: string }>`
  width: fit-content;
  height: fit-content;
  padding: 8px 12px;
  border-radius: 20px;

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
    }
  `}

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
`

export default ChoiceChips
