import styled from 'styled-components'
import type { MainSizeType } from './type'

export const RadioButtonComponent = styled.div<{ wrapperGap: string; _margin?: string }>`
  display: flex;
  flex-direction: column;

  margin-top: 16px;
  ${({ wrapperGap }) => `gap: ${wrapperGap}`}
`

export const RadioButtonMain = styled.button<{ mainSize: MainSizeType; checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.checked
      ? `
  background-image: url('data:image/svg+xml;utf8,%3Csvg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M20.25 6.75049L9.75 17.25L4.5 12.0005" stroke="rgb(87, 167, 117)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /%3E%3C/svg%3E');
  `
      : `
      background: #FFFDFA;
  `}
  border: 1px solid #57a775;

  &:hover {
    cursor: pointer;
  }

  ${({ mainSize }) =>
    mainSize === 'small'
      ? `
    width: 24px;
    height: 24px;
    border-radius: 8px
  `
      : `
    width: 32px;
    height: 32px;
    border-radius: 10px
  `}
`

export const RadioButtonWrapper = styled.div<{ labelMainGap: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${({ labelMainGap }) => `gap: ${labelMainGap}`}
`
