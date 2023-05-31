import React from 'react'
import styled, { css } from 'styled-components'
import type { CheckSizeType, ICheckSquare } from './type'

const CheckSquare = ({ _checked, setChecked, checkSize = 'large', _disabled = false }: ICheckSquare) => {
  const handleChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    setChecked(e.target.checked)
  }

  return (
    <CheckSquareComponent
      type="checkbox"
      checkSize={checkSize}
      checked={_checked}
      disabled={_disabled}
      onChange={handleChange}
    />
  )
}

const CheckSquareComponent = styled.input<{ checkSize: CheckSizeType }>`
  appearance: none;
  cursor: pointer;

  &:checked {
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

  ${(props) => css`
    background-color: ${props.theme.colors.side.side100};
    border: 1px solid ${props.theme.colors.primary.primary700};

    &:hover {
      box-shadow: ${props.theme.shadow.shadow1};
    }

    &:disabled {
      background-color: ${props.theme.colors.gray.gray1};
      border: 1px solid ${props.theme.colors.gray.gray3};
    }
  `}

  ${({ checkSize }) =>
    checkSize === 'small'
      ? css`
          width: 24px;
          height: 24px;

          border-radius: 8px;

          &:checked {
            background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(87, 167, 117)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          }
        `
      : css`
          width: 32px;
          height: 32px;

          border-radius: 10px;

          &:checked {
            background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(87, 167, 117)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
          }
        `}
`

export default CheckSquare
