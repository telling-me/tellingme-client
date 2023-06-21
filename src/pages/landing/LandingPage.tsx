import React, { useRef } from 'react'

// components
import {
  LandingBrand,
  LandingQuestion,
  LandingEmotion,
  LandingAnswer,
  LandingCatchPhrase,
  LandingHeader,
  Footer
} from 'components'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const LandingPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <LandingHeader />
      <LandingWrapper ref={scrollRef}>
        <LandingBrand />

        <LandingInfo>
          <LandingQuestion />
          <LandingEmotion />
          <LandingAnswer />
          <LandingCatchPhrase />
          <Footer />
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

  // TODO : Floating Button
  > button {
    position: fixed;
    bottom: 32px;
    right: 32px;
  }
`

const LandingInfo = styled.section`
  scroll-snap-stop: always;
  scroll-snap-align: start;
`
export default LandingPage
