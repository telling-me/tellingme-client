import React from 'react'
import styled, { keyframes } from 'styled-components'
import style from 'styles/styled-components/styled'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// assets
import Icon from 'assets/icons'

const MainBackground = () => {
  const windowSize = useWindowSize()
  return (
    <>
      <BackgroundWrapper>
        <BackgroundCircle
          _width={`${(windowSize.width as number) - 60}px`}
          _height={`${(windowSize.width as number) - 60}px`}
          animate={{
            rotate: 360
          }}
          transition={{ ease: 'linear', duration: 120, repeat: Infinity }}
        >
          <SmallLogoWrapper size={windowSize.width as number}>
            <Icon.LogoS1 width="44px" height="44px" />
            <Icon.LogoS2 width="42px" height="42px" />
            <Icon.LogoS3 width="18px" height="18px" />
            <Icon.LogoS4 width="28px" height="28px" />
          </SmallLogoWrapper>
        </BackgroundCircle>
      </BackgroundWrapper>
    </>
  )
}

const BackgroundWrapper = styled(style.Grid)`
  ${({ theme }) => theme.common.flexCenter}
  position: absolute;
  align-items: center;
  z-index: -9000;
`
const BackgroundCircle = styled(style.Grid)`
  background: linear-gradient(#fffdfa, #fffdfa) padding-box,
    linear-gradient(51.82deg, #7cefa7 1.24%, #8fd3f4 89.34%) border-box;
  border: 2px dashed #fffdfa;
  border-radius: 100%;
  ${({ theme }) => theme.common.flexCenter};
  position: relative;

  // max
  max-width: 1200px;
  max-height: 1200px;

  // min
  min-width: 408px;
  min-height: 408px;
`

// svg rotation keyframes
const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`

const SmallLogoWrapper = styled(style.Grid)<{ size: number }>`
  height: 100%;
  svg {
    animation: ${rotation} 6s ease infinite;
    position: absolute;
    :nth-child(1) {
      ${({ size }) => `
        top: calc(50% + 240px);
        right: calc(50% + 520px);
      `}
    }
    :nth-child(2) {
      ${({ size }) => `
        top: calc(50% + 360px);
        right: calc(50% - 480px);
      `}
    }
    :nth-child(3) {
      ${({ size }) => `
        top: calc(50% - 350px);
        right: calc(50% - 500px);
      `}
    }
    :nth-child(4) {
      ${({ size }) => `
        top: calc(50% - 400px);
        right: calc(50% + 440px);
      `}
    }
  }
`

export default MainBackground
