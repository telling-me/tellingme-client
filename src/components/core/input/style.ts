/* eslint-disable @typescript-eslint/restrict-template-expressions */
import useChangeColor from 'hooks/useChangeColor'
import useChangeTextSize from 'hooks/useChangeTextSize'
import styled from 'styled-components'
import type { ColorType, TextSizeType } from 'type/common'

export const InputComponent = styled.div<{ _margin: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  width: 100%;
  max-width: 425px;

  ${({ _margin }) => `margin: ${_margin}`}
`

export const InputOuterFrame = styled.div<{ isError?: boolean; _disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  gap: 16px;

  border-radius: 18px;

  width: 100%;
  max-width: 475px;

  ${({ theme, isError, _disabled }) =>
    _disabled === true
      ? `
      background-color: ${theme.colors.gray.gray1};
    `
      : isError === true
      ? `
      background-color: ${theme.colors.error.error100};
    `
      : `
      background-color: ${theme.colors.side.side200};
    `}
`

export const InputInnerFrame = styled.input<{ isError?: boolean; _disabled?: boolean }>`
  border: none;
  outline: none;

  width: 100%;

  ${({ theme, isError, _disabled }) =>
    _disabled === true
      ? `
      background-color: ${theme.colors.gray.gray1};
    `
      : isError === true
      ? `
      background-color: ${theme.colors.error.error100};
    `
      : `
      background-color: ${theme.colors.side.side200};
    `}
`

export const InputSpan = styled.span<{ textSize: string; textColor: string }>`
  margin: 0px 0px 0px 18px;

  width: 100%;
  max-width: 475px;

  ${({ textSize }) => `font-size: ${useChangeTextSize(textSize as TextSizeType)};`}
  ${({ textColor }) => `color: ${useChangeColor(textColor as ColorType)}`}
`
