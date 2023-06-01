import React from 'react'

// components
import {
  LandingBrand,
  LandingQuestion,
  LandingEmotion,
  LandingAnswer,
  LandingCatchPhrase,
  LandingFooter
} from 'components'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <>
      <LandingWrapper>
        <LandingBrand />
        <LandingInfo>
          <LandingQuestion />
          <LandingEmotion />
          <LandingAnswer />
          <LandingCatchPhrase />
        </LandingInfo>
        <LandingFooter />
      </LandingWrapper>
    </>
  )
}

const LandingWrapper = styled(motion.div)`
  position: relative;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow: auto;
`

const LandingInfo = styled.section`
  scroll-snap-stop: always;
  scroll-snap-align: start;
`
export default LandingPage
