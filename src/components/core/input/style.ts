import styled, { css } from 'styled-components'

export const InputComponent = styled.div<{ _margin?: string; _width: string; _maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  ${({ _width }) => `width: ${_width}`};
  ${({ _maxWidth }) => _maxWidth != null && `max-width: ${_maxWidth};`}
  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
`

export const InputOuterFrame2 = styled.div<{ isVisible: boolean; _value: string }>`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  padding: 15px 0px;

  cursor: text;

  svg {
    visibility: hidden;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      svg {
        visibility: visible;
        cursor: pointer;
      }
    `}

  &:hover {
    svg {
      ${({ _value }) => _value.length > 0 && `visibility: visible;`}
      cursor: pointer;
    }
  }
`

export const InputInnerFrame = styled.input<{ isError?: boolean }>`
  position: absolute;
  box-sizing: border-box;

  width: 100%;
  padding: 20px 30px;

  ${({ theme }) => theme.typo.body.b1}

  &::placeholder {
    color: ${(props) => props.theme.colors.gray.gray4};
  }

  background-color: ${(props) => props.theme.colors.side.side200};
  border-radius: 18px;

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.side.side400};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.gray.gray1};
  }

  ${(props) =>
    props.isError != null &&
    props.isError &&
    css`
      background-color: ${props.theme.colors.error.error100};

      &:focus {
        outline: none;
      }
    `}
`
