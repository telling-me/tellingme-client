/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from 'react'

// components
import Icon from 'assets/icons'
import styled, { css, useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

// animation
import { motion } from 'framer-motion'
import {
  landingCircleAni,
  landingLogoAni,
  landingBubbleAni,
  landingSubAni,
  floatAni,
  rotateAni,
  rotateReverseAni
} from 'styles/ani'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// utils
import { mediaQuery } from 'utils/mediaQuery'

const LandingBrand = () => {
  const windowSize = useWindowSize()
  const landingRef = useRef<HTMLDivElement>(null)
  const theme = useTheme()

  return (
    <LandingWrapper ref={landingRef}>
      <AbsoluteLogoBubble variants={landingBubbleAni} initial="init" animate="ani">
        <Icon.Bubble />
      </AbsoluteLogoBubble>
      <LogoWrapper variants={landingLogoAni} initial="init" animate="ani" custom={2}>
        <Icon.Logo fill={theme.colors.logo} />
      </LogoWrapper>
      <AbsoluteLogoSmall order={1} variants={landingSubAni} initial="init" animate="ani">
        <Icon.LogoSmallBubble1 />
      </AbsoluteLogoSmall>
      <AbsoluteLogoSmall order={2} variants={landingSubAni} initial="init" animate="ani">
        <Icon.LogoSmallBubble2 />
      </AbsoluteLogoSmall>
      <AbsoluteLogoSmall order={3} variants={landingSubAni} initial="init" animate="ani">
        <Icon.LogoSmallBubble3 />
      </AbsoluteLogoSmall>
      <AbsoluteLogoSmall order={4} variants={landingSubAni} initial="init" animate="ani">
        <Icon.LogoSmallBubble4 />
      </AbsoluteLogoSmall>
      <BorderCircle zIndex={4000} order={1} initial="init" animate="ani" custom={2} variants={landingCircleAni}>
        <Icon.LandingCircle />
      </BorderCircle>
      <BorderCircle zIndex={3000} order={2} initial="init" animate="ani" custom={3} variants={landingCircleAni}>
        <Icon.LandingCircle />
      </BorderCircle>
      <BorderCircle zIndex={2000} order={3} initial="init" animate="ani" custom={4} variants={landingCircleAni}>
        <Icon.LandingCircle />
      </BorderCircle>
      <BorderCircle zIndex={1000} order={4} initial="init" animate="ani" custom={5} variants={landingCircleAni}>
        <Icon.LandingCircle />
      </BorderCircle>
      <ScrollDownWrapper flex="center" direction="column" _gap="8px">
        {mediaQuery(windowSize.width) === 'desktop' ? (
          <TextSpan typo="h4_b" textColor="logo">
            Scroll
          </TextSpan>
        ) : null}
        <Icon.ScrollDown width={mediaQuery(windowSize.width) === 'mobile' ? '15' : '22'} />
      </ScrollDownWrapper>
    </LandingWrapper>
  )
}

const { Grid, TextSpan } = style

const LandingWrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  scroll-snap-align: start;
`

const LogoWrapper = styled(motion.div)`
  position: absolute;
  z-index: 9000;
  svg {
    transition: 0.3s;
    @media all and (min-width: 1200px) {
      width: 574px;
    }

    @media all and (min-width: 1024px) and (max-width: 1199px) {
      width: 492px;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      width: 410px;
    }

    @media all and (max-width: 767px) {
      width: 238px;
    }
  }
`

const AbsoluteLogoBubble = styled(motion.div)`
  position: absolute;
  z-index: 8000;
  filter: drop-shadow(${({ theme }) => theme.shadow.shadow1});

  svg {
    transition: 0.3s;
    @media all and (min-width: 1200px) {
      width: 460px;
    }

    @media all and (min-width: 1024px) and (max-width: 1199px) {
      width: 395px;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      width: 329px;
    }

    @media all and (max-width: 767px) {
      width: 191px;
    }
  }
`

const AbsoluteLogoSmall = styled(motion.div)<{ order: number }>`
  position: absolute;
  z-index: 5000;

  transition: 0.3s;
  ${({ order }) => {
    switch (order) {
      case 1:
        return css`
          @media all and (min-width: 1200px) {
            top: calc(50% + 170px);
            right: calc(50% + 343px);
          }

          @media all and (min-width: 1024px) and (max-width: 1199px) {
            top: calc(50% + 120px);
            right: calc(50% + 263px);
          }

          @media all and (min-width: 768px) and (max-width: 1023px) {
            top: calc(50% + 100px);
            right: calc(50% + 213px);
          }

          @media all and (max-width: 767px) {
            top: calc(50% + 60px);
            right: calc(50% + 133px);
          }

          svg {
            animation: ${floatAni} 1.5s ease-in-out infinite;
            @media all and (min-width: 1200px) {
              width: 112px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 96px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 80px;
            }

            @media all and (max-width: 767px) {
              width: 46px;
            }
          }
        `
      case 2:
        return css`
          @media all and (min-width: 1200px) {
            top: calc(50% + 140px);
            right: calc(50% - 403px);
          }

          @media all and (min-width: 1024px) and (max-width: 1199px) {
            top: calc(50% + 90px);
            right: calc(50% - 348px);
          }

          @media all and (min-width: 768px) and (max-width: 1023px) {
            top: calc(50% + 70px);
            right: calc(50% - 293px);
          }

          @media all and (max-width: 767px) {
            top: calc(50% + 40px);
            right: calc(50% - 173px);
          }

          svg {
            animation: ${floatAni} 1.5s ease-in-out infinite;
            @media all and (min-width: 1200px) {
              width: 86px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 74px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 61px;
            }

            @media all and (max-width: 767px) {
              width: 35px;
            }
          }
        `
      case 3:
        return css`
          @media all and (min-width: 1200px) {
            top: calc(50% - 220px);
            right: calc(50% - 363px);
          }

          @media all and (min-width: 1024px) and (max-width: 1199px) {
            top: calc(50% - 200px);
            right: calc(50% - 303px);
          }

          @media all and (min-width: 768px) and (max-width: 1023px) {
            top: calc(50% - 160px);
            right: calc(50% - 260px);
          }

          @media all and (max-width: 767px) {
            top: calc(50% - 100px);
            right: calc(50% - 143px);
          }

          svg {
            animation: ${floatAni} 1.5s ease-in-out infinite;
            @media all and (min-width: 1200px) {
              width: 57px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 48px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 40px;
            }

            @media all and (max-width: 767px) {
              width: 23px;
            }
          }
        `
      case 4:
        return css`
          @media all and (min-width: 1200px) {
            top: calc(50% - 260px);
            right: calc(50% + 343px);
          }

          @media all and (min-width: 1024px) and (max-width: 1199px) {
            top: calc(50% - 230px);
            right: calc(50% + 283px);
          }

          @media all and (min-width: 768px) and (max-width: 1023px) {
            top: calc(50% - 200px);
            right: calc(50% + 233px);
          }

          @media all and (max-width: 767px) {
            top: calc(50% - 125px);
            right: calc(50% + 133px);
          }

          svg {
            animation: ${floatAni} 1.5s ease-in-out infinite;
            @media all and (min-width: 1200px) {
              width: 36px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 31px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 26px;
            }

            @media all and (max-width: 767px) {
              width: 15px;
            }
          }
        `
    }
  }}
`

const BorderCircle = styled(motion.div)<{ zIndex: number; order: number }>`
  position: absolute;
  z-index: ${({ zIndex }) => zIndex};
  border-radius: 100%;

  svg {
    stroke: ${({ theme }) => theme.colors.primary.primary400_main};
    transition: 0.3s;
    ${({ order }) => {
      switch (order) {
        case 1:
          return css`
            animation: ${rotateAni} 12s linear infinite;
            circle {
              stroke-dasharray: 20 60;
            }
            @media all and (min-width: 1200px) {
              width: 476px;
              height: 476px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 408px;
              height: 408px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 340px;
              height: 340px;
            }

            @media all and (max-width: 767px) {
              width: 197px;
              height: 197px;
            }
          `
        case 2:
          return css`
            animation: ${rotateReverseAni} 16s linear infinite;
            circle {
              stroke-dasharray: 20 50;
            }
            @media all and (min-width: 1200px) {
              width: 784px;
              height: 784px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 672px;
              height: 672px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 560px;
              height: 560px;
            }

            @media all and (max-width: 767px) {
              width: 324px;
              height: 324px;
            }
          `
        case 3:
          return css`
            animation: ${rotateAni} 20s linear infinite;
            circle {
              stroke-dasharray: 20 40;
            }
            @media all and (min-width: 1200px) {
              width: 1092px;
              height: 1092px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 936px;
              height: 936px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 780px;
              height: 780px;
            }

            @media all and (max-width: 767px) {
              width: 452px;
              height: 452px;
            }
          `
        case 4:
          return css`
            animation: ${rotateReverseAni} 24s linear infinite;
            circle {
              stroke-dasharray: 20 30;
            }
            @media all and (min-width: 1200px) {
              width: 1400px;
              height: 1400px;
            }

            @media all and (min-width: 1024px) and (max-width: 1199px) {
              width: 1200px;
              height: 1200px;
            }

            @media all and (min-width: 768px) and (max-width: 1023px) {
              width: 1000px;
              height: 1000px;
            }

            @media all and (max-width: 767px) {
              width: 580px;
              height: 580px;
            }
          `
      }
    }}
  }
`

const ScrollDownWrapper = styled(Grid)`
  position: absolute;
  bottom: 110px;
  z-index: 9000;

  animation: ${floatAni} 1.5s ease-in-out infinite;
`

export default LandingBrand
