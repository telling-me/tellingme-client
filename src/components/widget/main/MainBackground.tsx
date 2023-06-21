import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { motion } from 'framer-motion'

// assets
import Icon from 'assets/icons'

// ani
import { rotateAni, floatAni } from 'styles/ani'

const MainBackground = () => {
  return (
    <BackgroundWrapper>
      <SmallLogoWrapper>
        <Icon.LogoSmallBubble1 />
        <Icon.LogoSmallBubble2 />
        <Icon.LogoSmallBubble4 />
        <Icon.LogoSmallBubble3 />
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
    @media all and (min-width: 1200px) {
      animation: ${rotateAni} 24s linear infinite;
      circle {
        stroke-dasharray: 8 12;
      }
      width: 1200px;
      height: 1200px;
    }

    @media all and (min-width: 1024px) and (max-width: 1199px) {
      animation: ${rotateAni} 20s linear infinite;
      circle {
        stroke-dasharray: 10 20;
      }
      width: 903px;
      height: 903px;
    }

    @media all and (min-width: 768px) and (max-width: 1023px) {
      animation: ${rotateAni} 16s linear infinite;
      circle {
        stroke-dasharray: 20 40;
      }
      width: 648px;
      height: 648px;
    }

    @media all and (max-width: 767px) {
      animation: ${rotateAni} 12s linear infinite;
      circle {
        stroke-dasharray: 20 30;
      }
      width: 408px;
      height: 408px;
    }
  }
`

const SmallLogoWrapper = styled(style.Grid)`
  height: 100%;
  z-index: 3000;
  svg {
    filter: drop-shadow(${({ theme }) => theme.shadow.shadow2});
    animation: ${floatAni} 1.5s ease-in-out infinite;
    position: absolute;
    transition: 0.3s;
    :nth-child(1) {
      @media all and (min-width: 1200px) {
        width: 44px;
        top: calc(50% + 290px);
        right: calc(50% + 330px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 44px;
        top: calc(50% + 300px);
        right: calc(50% + 305px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 44px;
        top: calc(50% + 220px);
        right: calc(50% + 203px);
      }

      @media all and (max-width: 767px) {
        width: 33px;
        top: calc(50% + 137px);
        right: calc(50% + 120px);
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
        top: calc(50% + 140px);
        right: calc(50% - 293px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 42px;
        top: calc(50% + 140px);
        right: calc(50% - 253px);
      }

      @media all and (max-width: 767px) {
        width: 35px;
        top: calc(50% + 130px);
        right: calc(50% - 135px);
      }
    }
    :nth-child(3) {
      @media all and (min-width: 1200px) {
        width: 18px;
        top: calc(50% - 340px);
        right: calc(50% - 393px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 18px;
        top: calc(50% - 290px);
        right: calc(50% - 310px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 18px;
        top: calc(50% - 280px);
        right: calc(50% - 270px);
      }

      @media all and (max-width: 767px) {
        width: 15px;
        top: calc(50% - 130px);
        right: calc(50% - 170px);
      }
    }
    :nth-child(4) {
      @media all and (min-width: 1200px) {
        width: 29px;
        top: calc(50% - 245px);
        right: calc(50% + 303px);
      }

      @media all and (min-width: 1024px) and (max-width: 1199px) {
        width: 29px;
        top: calc(50% - 210px);
        right: calc(50% + 270px);
      }

      @media all and (min-width: 768px) and (max-width: 1023px) {
        width: 29px;
        top: calc(50% - 240px);
        right: calc(50% + 210px);
      }

      @media all and (max-width: 767px) {
        width: 24px;
        top: calc(50% - 150px);
        right: calc(50% + 130px);
      }
    }
  }
`

export default MainBackground
