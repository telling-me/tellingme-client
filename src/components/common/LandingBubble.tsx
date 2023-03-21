import React from 'react'
import styled from 'styled-components'

const LandingBubble = () => {
  return <BubbleContainer />
}

const BubbleContainer = styled.div`
  width: 360px;
  height: 360px;
  background: ${({ theme }) => theme.gradient.default_gradient(180)};
  border-radius: 30%;
`

export default LandingBubble
