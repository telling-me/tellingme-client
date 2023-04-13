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

export const WithInputFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const WithInput = styled.input<{ _active?: boolean }>`
  border: none;
  outline: none;

  text-align: center;

  ${(props) =>
    props._active !== undefined && props._active
      ? css`
          background-color: ${(props) => props.theme.colors.side.side300};
        `
      : css`
          background-color: ${(props) => props.theme.colors.side.side200};
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

export const ButtonComponent = styled.button<{
  buttonType: ButtonType
  _active?: boolean
  _width?: string
  _height?: string
  _margin: string
  _justifyContent: string
}>`
  display: flex;
  align-items: center;
  border-radius: 20px;

  ${({ _width }) => _width !== undefined && `width: ${_width};`}
  ${({ _height }) => _height !== undefined && `height: ${_height};`}
  ${({ _margin }) => `margin: ${_margin};`}
  ${({ _justifyContent }) => `justify-content: ${_justifyContent};`}

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
    props.buttonType === 'tertiaryModified' && (props._active === undefined || !props._active)
      ? css`
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
        `
      : props._active !== undefined &&
        props._active &&
        css`
          background-color: ${(props) => props.theme.colors.side.side300};
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
