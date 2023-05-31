import React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingDots = () => {
  return (
    <LoadingDotsComponent>
      <LoadingDot _animationDelay="0s" />
      <LoadingDot _animationDelay="0.25s" />
      <LoadingDot _animationDelay="0.5s" />
      <LoadingDot _animationDelay="0.75s" />
    </LoadingDotsComponent>
  )
}

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`

const LoadingDotsComponent = styled.div`
  display: flex;
  gap: 8px;
`

const LoadingDot = styled.div<{ _animationDelay: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.colors.primary.primary700};

  animation: ${scale} 1.5s ease-in-out infinite;
  animation-delay: ${({ _animationDelay }) => _animationDelay};
`

export default LoadingDots
