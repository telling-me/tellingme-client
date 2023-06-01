import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'

// components
import style from 'styles/styled-components/styled'
import { Button, Modal } from 'components'
import Icon from 'assets/icons'

// configs
import { KAKAO_AUTH_URL } from 'configs/kakao'
import { APPLE_AUTH_URL } from 'configs/apple'

const LandingHeader = () => {
  const theme = useTheme()
  const [loginModal, setLoginModal] = useState(false)

  return (
    <HeaderWrapper>
      <Icon.Logo width={81} fill={theme.colors.logo} />
      <Button
        buttonType="secondary"
        contentType="text"
        textSize="h6"
        textColor="logo"
        text="시작하기"
        _padding="18px 36px"
        _onClick={() => {
          setLoginModal(true)
        }}
      />
      {loginModal && (
        <Modal
          _width="100%"
          _maxWidth="325px"
          _height="342px"
          _borderRadius="20px"
          _padding="24px 24px 32px 24px"
          _onClick={() => {
            setLoginModal(false)
          }}
        >
          <Button
            buttonType="noFilled"
            contentType="icon"
            icon="close"
            iconSize="medium"
            iconColor="gray6"
            _margin="0px 0px 0px auto"
            _onClick={() => {
              setLoginModal(false)
            }}
          />
          <Grid _height="100%" flex="between" direction="column">
            <Grid flex="start" direction="column" _gap="6px" _alignItems="start" _margin="9px 0 0 0">
              <TextH3 typo="h5" textColor="black">
                하루 한 번,
              </TextH3>
              <TextH3 typo="h5" textColor="black">
                질문에 답변하며
              </TextH3>
              <TextH3 typo="h5_b" textColor="black">
                나를 깨닫는 시간
              </TextH3>
            </Grid>

            <Grid flex="start" direction="column" _gap="12px">
              <Button
                _width="100%"
                _height="48px"
                buttonType="fourth"
                contentType="text"
                text="카카오 로그인"
                _onClick={() => {
                  window.location.href = KAKAO_AUTH_URL
                }}
              ></Button>
              <Button
                _width="100%"
                _height="48px"
                buttonType="tertiary"
                contentType="text"
                text="애플 로그인"
                _onClick={() => {
                  window.location.href = APPLE_AUTH_URL
                }}
              ></Button>
            </Grid>
          </Grid>
        </Modal>
      )}
    </HeaderWrapper>
  )
}

const { Grid, TextH3 } = style

const HeaderWrapper = styled(Grid)`
  z-index: 9000;
  position: absolute;
  top: 0;

  width: 100%;
  max-width: 1200px;
  ${({ theme }) => theme.common.flexBetween}
  padding: 20px 0 12px 0;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.side.side100};
  transition: 0.3s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 60px 12px;
  }

  @media all and (max-width: 767px) {
    padding: 20px 21px 12px 25px;
  }
`

export default LandingHeader
