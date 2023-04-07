import styled, { css } from 'styled-components'

import useChangeTextSize from 'hooks/useChangeTextSize'
import useChangeColor from 'hooks/useChangeColor'

// type
import { type ContentType, type ButtonType } from './type'
import { type TextSizeType } from 'type/common'

export const BothFrame = styled.div<{ contentType: ContentType; _gap: string }>`
  display: flex;
  align-items: center;

  ${({ contentType }) =>
    contentType === 'row'
      ? css`
          flex-direction: row;
        `
      : contentType === 'col' &&
        css`
          flex-direction: column;
        `}

  ${({ _gap }) =>
    css`
      gap: ${_gap};
    `}
`

export const ButtonContent = styled.div<{ textSize?: TextSizeType; textColor?: string; _padding: string }>`
  display: flex;

  ${({ textSize }) =>
    css`
      font-size: ${useChangeTextSize(textSize as TextSizeType)};
    `}

  ${({ textColor }) =>
    css`
      color: ${useChangeColor(textColor as string)};
    `}

  ${({ _padding }) =>
    css`
      padding: ${_padding};
    `}
`

export const ButtonComponent = styled.button<{ buttonType: ButtonType; _margin: string }>`
  display: flex;
  align-htems: center;
  border-radius: 20px;

  ${({ _margin }) =>
    css`
      margin: ${_margin};
    `}

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      background-color: ${(props) => props.theme.colors.primary.primary100};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary100};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray2};
      }
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      background-color: ${(props) => props.theme.colors.primary.primary25};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary25};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray1};
      }
    `}

  ${(props) =>
    props.buttonType === 'tertiary' &&
    css`
      background-color: ${(props) => props.theme.colors.side.side200};

      &:hover {
        background-color: ${(props) => props.theme.colors.side.side200};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.secondary.secondary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray1};
      }
    `}

  ${(props) =>
    props.buttonType === 'tertiaryModified' &&
    css`
      background-color: ${(props) => props.theme.colors.side.side200};

      &:hover {
        background-color: ${(props) => props.theme.colors.side.side200};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.side.side300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.side.side200};
      }
    `}

  ${(props) =>
    props.buttonType === 'fourth' &&
    css`
      background-color: ${(props) => props.theme.colors.secondary.secondary200};

      &:hover {
        background-color: ${(props) => props.theme.colors.secondary.secondary200};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.secondary.secondary700};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.secondary.secondary25};
      }
    `}
`
