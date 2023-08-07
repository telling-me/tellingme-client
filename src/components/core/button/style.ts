// component
import styled, { css } from 'styled-components'

// type
import type { ButtonType } from './type'
import type { ColorType } from 'type/common'

// hooks
import useChangeColor from 'hooks/useChangeColor'

export const ButtonComponent = styled.button<{
  buttonType: ButtonType
  textHoverColor?: ColorType
  _active?: boolean
  _width?: string
  _height?: string
  _margin?: string
  _padding?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  cursor: pointer;

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

  ${(props) =>
    props.buttonType === 'logo' &&
    css`
      background: ${(props) => props.theme.gradient.default_gradient()};
      box-shadow: ${({ theme }) => theme.shadow.shadow2};
    `}

  ${(props) =>
    props.buttonType === 'noFilled' &&
    css`
      padding: 0;
    `}

  // TODO : 색상 정의 재필요
  background-color: ${({ _active, theme }) => _active === true && theme.colors.side.side300};
`
