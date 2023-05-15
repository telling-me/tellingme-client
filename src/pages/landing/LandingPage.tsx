import React, { useState } from 'react'

// components
import Icon from 'assets/icons'
import Logo from 'assets/images/logo.png'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, LandingBubble, Modal } from 'components'

// config
import { KAKAO_AUTH_URL } from 'configs/kakao'
import { APPLE_AUTH_URL } from 'configs/apple'

// animation
import { motion } from 'framer-motion'
import { landingCircleAni, landingLogoAni, landingBubbleAni, landingSubAni } from 'styles/ani'

const LandingPage = () => {
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <>
      {loginOpen && (
        <Modal
          _width="100%"
          _maxWidth="325px"
          _height="345px"
          _borderRadius="20px"
          _padding="24px"
          _onClick={() => {
            setLoginOpen(false)
          }}
        >
          <style.Grid flex="between" direction="column" _height="100%">
            <style.Grid flex="start" direction="column" _alignItems="start" _gap="6px" _margin="32px 0 0 0">
              <style.TextP typo="h5">하루 한번</style.TextP>
              <style.TextP typo="h5">질문에 답변하며</style.TextP>
              <style.TextP typo="h5_b">나를 깨닫는 시간</style.TextP>
            </style.Grid>
            <style.Grid flex="start" direction="column" _gap="12px">
              <Button
                buttonType="primary"
                contentType="text"
                text="카카오 로그인"
                _width="100%"
                _height="46px"
                _onClick={() => {
                  window.location.href = KAKAO_AUTH_URL
                }}
              />
              <Button
                buttonType="primary"
                contentType="text"
                text="애플 로그인"
                _width="100%"
                _height="46px"
                _onClick={() => {
                  window.location.href = APPLE_AUTH_URL
                }}
              />
            </style.Grid>
          </style.Grid>
        </Modal>
      )}
      <LandingWrapper
        onClick={() => {
          setLoginOpen(true)
        }}
      >
        <AbsoluteLogoBubble variants={landingBubbleAni} initial="init" animate="ani">
          <LandingBubble />
        </AbsoluteLogoBubble>
        <LandingLogo variants={landingLogoAni} initial="init" animate="ani" custom={2} src={Logo} />
        <AbsoluteLogoS1 variants={landingSubAni} initial="init" animate="ani" custom={2}>
          <Icon.LogoS1 />
        </AbsoluteLogoS1>
        <AbsoluteLogoS2 variants={landingSubAni} initial="init" animate="ani" custom={3}>
          <Icon.LogoS2 />
        </AbsoluteLogoS2>
        <AbsoluteLogoS3 variants={landingSubAni} initial="init" animate="ani" custom={4}>
          <Icon.LogoS3 />
        </AbsoluteLogoS3>
        <AbsoluteLogoS4 variants={landingSubAni} initial="init" animate="ani" custom={5}>
          <Icon.LogoS4 />
        </AbsoluteLogoS4>
        <AbsoluteCircle1 initial="init" animate="ani" custom={2} variants={landingCircleAni} />
        <AbsoluteCircle2 initial="init" animate="ani" custom={3} variants={landingCircleAni} />
        <AbsoluteCircle3 initial="init" animate="ani" custom={4} variants={landingCircleAni} />
        <AbsoluteCircle4 initial="init" animate="ani" custom={5} variants={landingCircleAni} />
      </LandingWrapper>
    </>
  )
}

const LandingWrapper = styled(motion.div)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
`

const AbsoluteLogoS1 = styled(motion.div)`
  position: absolute;
  z-index: 5000;
  right: calc(50% - 450px);
  top: calc(50% + 40px);
`

const AbsoluteLogoS2 = styled(motion.div)`
  position: absolute;
  z-index: 5000;
  left: calc(50% - 450px);
  top: calc(50% + 130px);
`

const AbsoluteLogoS3 = styled(motion.div)`
  position: absolute;
  z-index: 5000;
  right: calc(50% - 410px);
  top: calc(50% - 230px);
`

const AbsoluteLogoS4 = styled(motion.div)`
  position: absolute;
  z-index: 5000;
  left: calc(50% - 360px);
  top: calc(50% - 220px);
`
const AbsoluteLogoBubble = styled(motion.div)`
  position: absolute;
  z-index: 7000;
`

const borderCircle = styled(motion.div)`
  position: absolute;
  border: 2px dashed #ffffff;
  border-radius: 100%;
`

const AbsoluteCircle1 = styled(borderCircle)`
  z-index: 4000;
  width: 426px;
  height: 426px;
`

const AbsoluteCircle2 = styled(borderCircle)`
  z-index: 3000;
  width: 696px;
  height: 696px;
`

const AbsoluteCircle3 = styled(borderCircle)`
  z-index: 2000;
  width: 1015px;
  height: 1015px;
`

const AbsoluteCircle4 = styled(borderCircle)`
  z-index: 1000;
  width: 1379px;
  height: 1379px;
`

const LandingLogo = styled(motion.img)`
  position: absolute;
  z-index: 8000;
  top: calc(50% - 130px);
  width: 554px;
  height: 234px;
`

export default LandingPage
