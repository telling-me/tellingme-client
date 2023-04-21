// component
import styled, { css } from 'styled-components'

// type
import type { ContentType, ButtonType } from './type'
import type { ColorType } from 'type/common'

// hooks
import useChangeColor from 'hooks/useChangeColor'

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

  ${({ _gap }) => `gap: ${_gap};`}
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

export const ButtonComponent = styled.button<{
  buttonType: ButtonType
  textHoverColor?: ColorType
  _active?: boolean
  _width?: string
  _height?: string
  _margin?: string
  _padding?: string
  _justifyContent: string
}>`
  display: flex;
  align-items: center;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
  }

  ${({ textHoverColor }) =>
    textHoverColor !== undefined &&
    css`
      &:hover span {
        color: ${useChangeColor(textHoverColor)};
      }
    `}
  ${({ _width }) => _width !== undefined && `width: ${_width};`}
  ${({ _height }) => _height !== undefined && `height: ${_height};`}
  ${({ _margin }) => _margin !== undefined && `margin: ${_margin};`}
  ${({ _padding }) => _padding !== undefined && `padding: ${_padding};`}
  ${({ _justifyContent }) => `justify-content: ${_justifyContent};`}

  ${(props) =>
    props.buttonType === 'primary' &&
    css`
      background-color: ${(props) => props.theme.colors.primary.primary100};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary100};
        box-shadow: ${(props) => props.theme.shadow.shadow1};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray2};
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.buttonType === 'secondary' &&
    css`
      background-color: ${(props) => props.theme.colors.primary.primary25};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary25};
        box-shadow: ${(props) => props.theme.shadow.shadow1};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray1};
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.buttonType === 'tertiary' &&
    css`
      background-color: ${(props) => props.theme.colors.side.side200};

      &:hover {
        background-color: ${(props) => props.theme.colors.side.side200};
        box-shadow: ${(props) => props.theme.shadow.shadow1};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.secondary.secondary300};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.gray.gray1};
        box-shadow: none;
      }
    `}

  ${(props) =>
    props.buttonType === 'tertiaryModified' && (props._active === undefined || !props._active)
      ? css`
          background-color: ${(props) => props.theme.colors.side.side200};

          &:hover {
            background-color: ${(props) => props.theme.colors.side.side200};
            box-shadow: ${(props) => props.theme.shadow.shadow1};
          }

          &:active {
            background-color: ${(props) => props.theme.colors.side.side300};
          }

          &:disabled {
            background-color: ${(props) => props.theme.colors.side.side200};
            box-shadow: none;
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
        box-shadow: ${(props) => props.theme.shadow.shadow1};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.secondary.secondary700};
      }

      &:disabled {
        background-color: ${(props) => props.theme.colors.secondary.secondary25};
        box-shadow: none;
      }
    `}
`
