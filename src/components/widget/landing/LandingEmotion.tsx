import React from 'react'
import styled from 'styled-components'

const LandingEmotion = () => {
  return <EmotionInfo></EmotionInfo>
}

const EmotionInfo = styled.div`
  @media all and (min-width: 1024px) {
    height: 976px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 938px;
  }

  @media all and (max-width: 767px) {
    height: 620px;
  }
  background-color: ${({ theme }) => theme.colors.side.side200};
`

export default LandingEmotion
