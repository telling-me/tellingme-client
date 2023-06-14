import styled, { css } from 'styled-components'
import type { DropdownSizeType } from './type'

export const DropdownComponent = styled.div<{ _margin?: string; _maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  position: relative;

  width: 100%;

  ${({ _maxWidth }) => _maxWidth != null && `max-width: ${_maxWidth}`}
  ${({ _margin }) => _margin != null && `margin: ${_margin}`};
`

export const DropdownButton = styled.button<{ dropdownSize: DropdownSizeType; _disabled?: boolean }>`
  width: 100%;
  background-color: ${(props) => props.theme.colors.side.side200};

  cursor: pointer;

  ${({ _disabled, theme }) =>
    _disabled != null &&
    _disabled &&
    css`
      background-color: ${theme.colors.gray.gray1};

      cursor: default;

      span {
        color: ${theme.colors.gray.gray4};
      }
    `}

  ${({ dropdownSize }) =>
    dropdownSize === 'small'
      ? css`
          border-radius: 16px;
          padding: 10px 16px 10px 20px;
        `
      : css`
          border-radius: 18px;
          padding: 16.5px 20px;
        `}
`

export const DropdownInnerWrapper = styled.div<{ dropdownSize: DropdownSizeType }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: ${({ dropdownSize }) => (dropdownSize === 'small' ? '8px' : '4px')};
`

export const DropdownSelectedField = styled.div`
  text-align: left;

  width: 100%;
`

export const DropdownList = styled.div<{
  dropdownSize: DropdownSizeType
  listLength: string
  direction: 'up' | 'down'
}>`
  display: flex;
  flex-direction: column;

  z-index: 100;

  position: absolute;
  // bottom: ${({ listLength }) => `-${parseInt(listLength) + 8}px`};/
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  width: 100%;
  height: ${({ listLength }) => `${listLength}px`};
  max-height: 208px;
  background-color: ${(props) => props.theme.colors.side.side200};
  border-radius: ${({ dropdownSize }) => (dropdownSize === 'small' ? '16px' : '18px')};

  ${({ direction, listLength }) =>
    direction === 'up' ? `top: -${parseInt(listLength) + 8}px` : `bottom: -${parseInt(listLength) + 8}px;`}
`

export const DropdownItem = styled.button<{ dropdownSize: DropdownSizeType }>`
  text-align: left;
  cursor: pointer;

  padding: ${({ dropdownSize }) => (dropdownSize === 'small' ? '12px 30px' : '17.5px 20px')};

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.side.side300};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.side.side300};
    color: ${(props) => props.theme.colors.side.side500};
  }
`
