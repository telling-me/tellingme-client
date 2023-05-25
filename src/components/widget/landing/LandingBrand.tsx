import React from 'react'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'

// animation
import { motion } from 'framer-motion'
import { landingCircleAni, landingLogoAni, landingBubbleAni, landingSubAni } from 'styles/ani'
import useWindowSize from 'hooks/useWindowSize'

const LandingBrand = () => {
  const windowSize = useWindowSize()
  return (
    <LandingWrapper>
      <AbsoluteLogoBubble variants={landingBubbleAni} initial="init" animate="ani">
        <Icon.Bubble width={windowSize.width / 2} />
      </AbsoluteLogoBubble>
      <LogoWrapper variants={landingLogoAni} initial="init" animate="ani" custom={2}>
        <Icon.Logo width={windowSize.width / 1.6} />
      </LogoWrapper>
      <AbsoluteLogoS1 windowWidth={windowSize.width} variants={landingSubAni} initial="init" animate="ani" custom={2}>
        <Icon.LogoS1 width={windowSize.width / 12} />
      </AbsoluteLogoS1>
      <AbsoluteLogoS2 windowWidth={windowSize.width} variants={landingSubAni} initial="init" animate="ani" custom={3}>
        <Icon.LogoS2 width={windowSize.width / 12} />
      </AbsoluteLogoS2>
      <AbsoluteLogoS3 windowWidth={windowSize.width} variants={landingSubAni} initial="init" animate="ani" custom={4}>
        <Icon.LogoS3 width={windowSize.width / 12} />
      </AbsoluteLogoS3>
      <AbsoluteLogoS4 windowWidth={windowSize.width} variants={landingSubAni} initial="init" animate="ani" custom={5}>
        <Icon.LogoS4 width={windowSize.width / 12} />
      </AbsoluteLogoS4>
      <AbsoluteCircle1
        size={windowSize.width / 2}
        initial="init"
        animate="ani"
        custom={2}
        variants={landingCircleAni}
      />
      <AbsoluteCircle2
        size={windowSize.width / 1.3}
        initial="init"
        animate="ani"
        custom={3}
        variants={landingCircleAni}
      />
      <AbsoluteCircle3
        size={windowSize.width * 1.1}
        initial="init"
        animate="ani"
        custom={4}
        variants={landingCircleAni}
      />
      <AbsoluteCircle4
        size={windowSize.width * 1.5}
        initial="init"
        animate="ani"
        custom={5}
        variants={landingCircleAni}
      />
    </LandingWrapper>
  )
}

const LandingWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`

const LogoWrapper = styled(motion.div)`
  position: absolute;
  z-index: 9000;
  svg {
    max-width: 574px;
    min-width: 240px;
  }
`
const AbsoluteLogoBubble = styled(motion.div)`
  position: absolute;
  z-index: 8000;

  svg {
    // LogoWrapper * 0.8
    max-width: 460px;
    min-width: 192px;
  }
`

const AbsoluteLogoS1 = styled(motion.div)<{ windowWidth: number }>`
  position: absolute;
  z-index: 5000;
  // 360 < windowSize에 따라 달라짐 < 1148;
  ${({ windowWidth }) =>
    `right : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 3 : 120) : 382}px)`};
  ${({ windowWidth }) =>
    `top : calc(50% + ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 8 : 45) : 143}px)`};

  svg {
    max-width: 112px;
    min-width: 46px;
  }
`

const AbsoluteLogoS2 = styled(motion.div)<{ windowWidth: number }>`
  position: absolute;
  z-index: 5000;
  // 360 < windowSize에 따라 달라짐 < 1148;
  ${({ windowWidth }) =>
    `left : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 3 : 120) : 382}px)`};
  ${({ windowWidth }) =>
    `top : calc(50% + ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 6 : 60) : 191}px)`};

  svg {
    max-width: 86px;
    min-width: 35px;
  }
`

const AbsoluteLogoS3 = styled(motion.div)<{ windowWidth: number }>`
  position: absolute;
  z-index: 5000;
  // 360 < windowSize에 따라 달라짐 < 1148;
  ${({ windowWidth }) =>
    `right : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 3 : 120) : 382}px)`};
  ${({ windowWidth }) =>
    `top : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 4 : 90) : 287}px)`};

  svg {
    max-width: 72px;
    min-width: 15px;
  }
`

const AbsoluteLogoS4 = styled(motion.div)<{ windowWidth: number }>`
  position: absolute;
  z-index: 5000;
  // 360 < windowSize에 따라 달라짐 < 1148;
  ${({ windowWidth }) =>
    `left : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 3 : 120) : 382}px)`};
  ${({ windowWidth }) =>
    `top : calc(50% - ${windowWidth < 1148 ? (windowWidth > 360 ? windowWidth / 4 : 90) : 287}px)`};

  svg {
    max-width: 57px;
    min-width: 22px;
  }
`

const borderCircle = styled(motion.div)`
  position: absolute;
  border: 1.5px dashed #fffdfa;
  border-radius: 100%;
`

const AbsoluteCircle1 = styled(borderCircle)<{ size: number }>`
  z-index: 4000;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  max-width: 460px;
  max-height: 460px;
  min-width: 192px;
  min-height: 192px;
`

const AbsoluteCircle2 = styled(borderCircle)<{ size: number }>`
  z-index: 3000;

  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  max-width: 784px;
  max-height: 784px;
  min-width: 320px;
  min-height: 320px;
`

const AbsoluteCircle3 = styled(borderCircle)<{ size: number }>`
  z-index: 2000;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  max-width: 1015px;
  max-height: 1015px;
  min-width: 450px;
  min-height: 450px;
`

const AbsoluteCircle4 = styled(borderCircle)<{ size: number }>`
  z-index: 1000;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  max-width: 1400px;
  max-height: 1400px;
  min-width: 580px;
  min-height: 580px;
`

export default LandingBrand
