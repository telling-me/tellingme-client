import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
// hooks
import useWindowSize from 'hooks/useWindowSize'
// assets
import Icon from 'assets/icons'
const MainBackground = () => {
  const windowSize = useWindowSize()
  return (
    <BackgroundWrapper>
      <BackgroundCircle
        _width={`${windowSize.width - 60}px`}
        _height={`${windowSize.width - 60}px`}
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 120, repeat: Infinity }}
      >
        <SmallLogoWrapper>
          <Icon.LogoS1 width="44px" height="44px" />
          <Icon.LogoS2 width="42px" height="42px" />
          <Icon.LogoS3 width="18px" height="18px" />
          <Icon.LogoS4 width="28px" height="28px" />
        </SmallLogoWrapper>
      </BackgroundCircle>
    </BackgroundWrapper>
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
  // max
  max-width: 1200px;
  max-height: 1200px;
  // min
  min-width: 408px;
  min-height: 408px;
`
const SmallLogoWrapper = styled(style.Grid)``
export default MainBackground
