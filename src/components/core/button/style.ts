import styled, { css, keyframes } from 'styled-components'
import { type StyleType } from './type'

const buttonLoadingSpinner = keyframes`
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(1turn);
  }
`

export const BaseButton = styled.button<{
  _width?: string
  margin?: string
  isLoading?: boolean
}>`
  height: 40px;
  width: ${({ _width }) => _width ?? 'max-content'};
  white-space: nowrap;
  padding: 0 24px;
  border-radius: 8px;

  ${({ margin }) => margin != null && `margin: ${margin}`};

  ${({ theme }) => theme.typo.body.b1_b};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s, border 0.2s;

  &:disabled {
    cursor: unset;
  }
`

// Primary
export const PrimaryButton = styled(BaseButton)<{ styleType: StyleType }>`
  // type - filled
  ${(props) =>
    props.styleType === 'filled' &&
    css`
      --color: ${(props) => props.theme.colors.gray.gray0};
      color: var(--color);
      background-color: ${(props) =>
        props.theme.colors.primary.primary400_main};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary900};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary900};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.primary.primary100};
        background-color: ${(props) => props.theme.colors.primary.primary100};
      }
    `}

  // type - tonal
    ${(props) =>
    props.styleType === 'tonal' &&
    css`
      --color: ${(props) => props.theme.colors.primary.primary900};
      color: var(--color);
      background-color: ${(props) => props.theme.colors.primary.primary900};

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary900};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.gray.gray3};
        background-color: ${(props) => props.theme.colors.gray.gray1};
      }
    `}

    // type - outlined
    ${(props) =>
    props.styleType === 'outlined' &&
    css`
      --color: ${(props) => props.theme.colors.primary.primary900};
      color: var(--color);
      background-color: ${({ theme }) => theme.colors.gray.gray0};
      border: 1px solid ${(props) => props.theme.colors.primary.primary900};

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary100};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary900};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.gray.gray3};
        border-color: ${(props) => props.theme.colors.gray.gray1};
        background-color: ${({ theme }) => theme.colors.gray.gray0};
      }
    `}

        // type - text
        ${(props) =>
    props.styleType === 'text' &&
    css`
      --color: ${(props) => props.theme.colors.primary.primary400_main};
      color: var(--color);
      background-color: transparent;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary.primary100};
      }

      &:active {
        background-color: ${(props) => props.theme.colors.primary.primary200};
      }

      &:disabled {
        color: ${(props) => props.theme.colors.gray.gray3};
        background-color: transparent;
      }
    `}

${({ isLoading }) =>
    isLoading === true &&
    css`
      & > span {
        visibility: hidden;
      }

      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: calc(50% - (8px + 2px));
        left: calc(50% - (8px + 2px));
        margin: auto;
        border: 2px solid transparent;
        border-top-color: var(--color);
        border-radius: 50%;
        animation: ${buttonLoadingSpinner} 1s ease infinite;
      }
    `}
`

// Danger
export const DangerButton = styled(BaseButton)`
  --color: ${(props) => props.theme.colors.system.red_darken}
  color: var(--color);
  background-color: ${(props) => props.theme.colors.system.red_lighten};

  &:hover {
    color: ${(props) => props.theme.colors.gray.gray0};
    background-color: ${(props) => props.theme.colors.system.red};
  }

  &:active {
    color: ${(props) => props.theme.colors.gray.gray0};
    background-color: ${(props) => props.theme.colors.system.red_darken};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.gray.gray3};
    background-color: ${(props) => props.theme.colors.gray.gray1};
  }

  ${({ isLoading, theme }) =>
    isLoading === true &&
    css`
      & > span {
        visibility: hidden;
      }

      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: calc(50% - (8px + 2px));
        left: calc(50% - (8px + 2px));
        margin: auto;
        border: 2px solid transparent;
        border-top-color: var(--color);
        border-radius: 50%;
        animation: ${buttonLoadingSpinner} 1s ease infinite;
      }
    `}
`
