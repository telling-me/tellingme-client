import styled, { css } from 'styled-components'
import type { ToolTipType } from './type'

export const ToolTipComponent = styled.div<{ _margin?: string }>`
  display: flex !important;

  position: relative;
  display: inline-block;

  ${({ _margin }) => _margin != null && `margin: ${_margin};`};
`

export const ToolTipWrapper = styled.div<{ tooltipType: ToolTipType; childrenWidth: number; _margin?: string }>`
  visibility: hidden;

  display: flex;

  position: absolute;
  z-index: 1;

  width: max-content;

  ${({ tooltipType, childrenWidth }) =>
    tooltipType === 'right'
      ? css`
          left: 0;
          top: 50%;
          transform: translate(-100%, -50%);

          flex-direction: row;
          align-items: center;

          svg {
            margin-left: -1px;
          }
        `
      : tooltipType === 'left'
      ? css`
          right: 0;
          top: 50%;
          transform: translate(100%, -50%);

          flex-direction: row;
          align-items: center;

          svg {
            margin-right: -1px;
          }
        `
      : tooltipType === 'bottom'
      ? css`
          bottom: 100%;
          left: 50%;
          transform: translate(-50%, 0);

          flex-direction: column;
          align-items: center;
        `
      : tooltipType === 'topLeft'
      ? css`
          top: 100%;
          left: 50%;
          transform: translate(calc(-13px - ${childrenWidth / 2}px), 0);

          flex-direction: column;
          align-items: flex-start;

          svg {
            margin-left: 13px;
          }
        `
      : tooltipType === 'topRight'
      ? css`
          top: 100%;
          right: 50%;
          transform: translate(calc(13px + ${childrenWidth / 2}px), 0);

          flex-direction: column;
          align-items: flex-end;

          svg {
            margin-right: 13px;
          }
        `
      : tooltipType === 'bottomLeft'
      ? css`
          bottom: 100%;
          left: 50%;
          transform: translate(calc(-13px - ${childrenWidth / 2}px), 0);

          flex-direction: column;
          align-items: flex-start;

          svg {
            margin-left: 13px;
          }
        `
      : tooltipType === 'bottomRight' &&
        css`
          bottom: 100%;
          right: 50%;
          transform: translate(calc(13px + ${childrenWidth / 2}px), 0);

          flex-direction: column;
          align-items: flex-end;

          svg {
            margin-right: 13px;
          }
        `}

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;

  ${ToolTipComponent}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

export const ToolTipTextWrapper = styled.div<{ isError: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: ${({ isError, theme }) => (isError ? theme.colors.error.error400 : theme.colors.side.side500)};
  border-radius: 8px;

  padding: 10px 12px;

  p {
    height: fit-content !important;
    white-space: pre-line;
  }
`
