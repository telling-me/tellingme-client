import styled, { css } from 'styled-components'
import type { CheckSizeType } from './type'

export const CheckBoxComponent = styled.div<{
  checkSize: CheckSizeType
  _margin?: string
  _padding?: string
  _maxWidth?: string
  isBackground: boolean
  _disabled: boolean
}>`
  display: flex;
  align-items: center;

  width: 100%;

  background-color: ${({ theme, _disabled, isBackground }) =>
    _disabled ? theme.colors.gray.gray2 : isBackground ? theme.colors.primary.primary25 : theme.colors.side.side100};

  &:hover {
    ${({ theme, isBackground }) => isBackground && `box-shadow: ${theme.shadow.shadow1};`}
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

  ${({ _padding }) => _padding != null && `padding: ${_padding};`}
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
