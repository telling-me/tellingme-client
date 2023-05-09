import styled, { css } from 'styled-components'
import type { ToolTipType } from './type'

export const ToolTipComponent = styled.div`
  position: relative;
  display: inline-block;
`

export const ToolTipWrapper = styled.div<{ tooltipType: ToolTipType }>`
  visibility: hidden;

  display: flex;

  position: absolute;
  z-index: 1;

  ${({ tooltipType }) =>
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
          transform: translate(-25%, 0);

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
          transform: translate(25%, 0);

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
          transform: translate(-25%, 0);

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
          transform: translate(25%, 0);

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

export const ToolTipTextWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.error.error300};
  border-radius: 8px;

  text-align: center;
  padding: 10px 12px;
`
