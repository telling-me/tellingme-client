import React from 'react'
import styled, { useTheme } from 'styled-components'

import { type IFloatButton } from './type'
import Icon from 'assets/icons'

const FloatingButton = ({ size = 'lg', ref }: IFloatButton) => {
  const theme = useTheme()
  return (
    <FloatingWrapper
      size={size}
      onClick={() => {
        ref?.current?.scrollIntoView()
      }}
    >
      <Icon.CaretUp
        width={size === 'lg' ? 32 : 24}
        height={size === 'lg' ? 32 : 24}
        stroke={theme.colors.side.side100}
      />
    </FloatingWrapper>
  )
}

const FloatingWrapper = styled.button<{ size: string }>`
  ${({ size }) => (size === 'lg' ? 'width: 56px; height: 56px;' : 'width: 48px; height: 48px;')}
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.side.side500};
  z-index: 9999;
  cursor: pointer;
  transition: 0.3s;

  :hover {
    background-color: ${({ theme }) => theme.colors.side.side400};
  }
`

export default FloatingButton
