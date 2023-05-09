import styled, { css } from 'styled-components'
import type { CheckSizeType } from './type'

export const CheckBoxComponent = styled.div<{
  checkSize: CheckSizeType
  _margin?: string
  _maxWidth?: string
  _disabled: boolean
}>`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: ${({ theme, _disabled }) => (_disabled ? theme.colors.gray.gray2 : theme.colors.primary.primary25)};

  &:hover {
    box-shadow: ${(props) => props.theme.shadow.shadow1};
  }

  ${({ checkSize }) =>
    checkSize === 'small'
      ? css`
          padding: 12px 16px;

          border-radius: 12px;
        `
      : css`
          padding: 10px 16px;

          border-radius: 18px;
        `}

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
  ${({ _maxWidth }) => _maxWidth != null && `max-width: ${_maxWidth};`}
`

export const CheckBoxButton = styled.button`
  ${(props) => css`
    ${props.theme.typo.caption.c}

    color: ${props.theme.colors.primary.primary700};

    &:disabled {
      color: ${props.theme.colors.gray.gray3};
    }
  `}

  margin-left: auto;

  cursor: pointer;
`
