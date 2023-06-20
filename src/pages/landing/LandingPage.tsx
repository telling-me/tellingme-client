import React from 'react'

// components
import {
  LandingBrand,
  LandingQuestion,
  LandingEmotion,
  LandingAnswer,
  LandingCatchPhrase,
  LandingFooter,
  LandingHeader
} from 'components'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <LandingWrapper>
        <LandingBrand />
        <LandingInfo>
          <LandingQuestion />
          <LandingEmotion />
          <LandingAnswer />
          <LandingCatchPhrase />
          <LandingFooter />
        </LandingInfo>
      </LandingWrapper>
    </>
  )
}

const LandingWrapper = styled(motion.main)`
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
