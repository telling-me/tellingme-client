import React from 'react'
import styled from 'styled-components'
import type { IMyAnswerModeButton } from './type'

const ListViewButton = ({ isSelected, children, _onClick }: IMyAnswerModeButton) => {
  return (
    <ButtonWrapper isSelected={isSelected} onClick={!isSelected ? _onClick : undefined}>
      {children}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button<{ isSelected: boolean }>`
  ${({ theme }) => theme.common.flexCenter}

  width: 32px;
  height: 32px;

  background-color: ${({ theme, isSelected }) => (isSelected ? theme.colors.side.side200 : 'none')};
  border-radius: 8px;

  &:hover {
    svg {
      stroke: ${(props) => props.theme.colors.side.side500};
    }
  }

  transition: all ease 0.2s;
`

export default ListViewButton
