import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// assets
import Icon from 'assets/icons'
import { motion } from 'framer-motion'

// ani
import { rotateAni, floatAni } from 'styles/ani'

const MainBackground = () => {
  return (
    <BackgroundWrapper>
      <SmallLogoWrapper>
        <Icon.LogoSmallBubble1 />
        <Icon.LogoSmallBubble2 />
        <Icon.LogoSmallBubble3 />
        <Icon.LogoSmallBubble4 />
      </SmallLogoWrapper>
      <BorderCircle>
        <Icon.LandingCircle />
      </BorderCircle>
    </BackgroundWrapper>
  )
}
const BackgroundWrapper = styled(style.Grid)`
  ${({ theme }) => theme.common.flexCenter}
  position: absolute;
  align-items: center;
  z-index: -9000;
`

const BorderCircle = styled(motion.div)`
  position: absolute;
  border-radius: 100%;
  svg {
    stroke: ${({ theme }) => theme.colors.primary.primary400_main};
    transition: 0.3s;
    animation: ${rotateAni} 16s linear infinite;
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
  }
`

const SmallLogoWrapper = styled(style.Grid)`
  height: 100%;
  z-index: 3000;
  svg {
    animation: ${floatAni} 1.5s ease-in-out infinite;
    position: absolute;
    transition: 0.3s;
    :nth-child(1) {
      @media all and (min-width: 1200px) {
        width: 44px;
        top: calc(50% + 170px);
        right: calc(50% + 333px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 44px;
        top: calc(50% + 120px);
        right: calc(50% + 283px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 44px;
        top: calc(50% + 100px);
        right: calc(50% + 233px);
      }

      @media all and (max-width: 767px) {
        width: 44px;
        top: calc(50% + 90px);
        right: calc(50% + 113px);
      }
    }
    :nth-child(2) {
      @media all and (min-width: 1200px) {
        width: 42px;
        top: calc(50% + 140px);
        right: calc(50% - 393px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 42px;
        top: calc(50% + 90px);
        right: calc(50% - 348px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 42px;
        top: calc(50% + 80px);
        right: calc(50% - 293px);
      }

      @media all and (max-width: 767px) {
        width: 42px;
        top: calc(50% + 90px);
        right: calc(50% - 153px);
      }
    }
    :nth-child(3) {
      @media all and (min-width: 1200px) {
        width: 24px;
        top: calc(50% - 220px);
        right: calc(50% - 353px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 24px;
        top: calc(50% - 200px);
        right: calc(50% - 293px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 24px;
        top: calc(50% - 160px);
        right: calc(50% - 250px);
      }

      @media all and (max-width: 767px) {
        width: 24px;
        top: calc(50% - 120px);
        right: calc(50% - 123px);
      }
    }
    :nth-child(4) {
      @media all and (min-width: 1200px) {
        width: 18px;
        top: calc(50% - 245px);
        right: calc(50% + 303px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 18px;
        top: calc(50% - 210px);
        right: calc(50% + 270px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 18px;
        top: calc(50% - 190px);
        right: calc(50% + 193px);
      }

      @media all and (max-width: 767px) {
        width: 18px;
        top: calc(50% - 125px);
        right: calc(50% + 103px);
      }
    }
  }
`

export default MainBackground
