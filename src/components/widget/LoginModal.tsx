import React from 'react'

// components
import style from 'styles/styled-components/styled'
import { Button, IconButton, Modal } from 'components'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'

// configs
import { KAKAO_AUTH_URL } from 'configs/kakao'
import { APPLE_AUTH_URL } from 'configs/apple'

interface ILoginModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginModal = ({ setOpen }: ILoginModal) => {
  const { Grid, TextH3 } = style

  return (
    <Modal
      _width="100%"
      _maxWidth="325px"
      _height="342px"
      _borderRadius="20px"
      _padding="24px 24px 32px 24px"
      _onClick={() => {
        setOpen(false)
      }}
    >
      <IconButton
        buttonType="noFilled"
        _width="fit-content"
        _height="fit-content"
        _margin="0 0 0 auto"
        _onClick={() => {
          setOpen(false)
        }}
      >
        <Icons.Close width="24" height="24" stroke={useChangeColor('gray6')} />
      </IconButton>
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
            text="카카오 로그인"
            _onClick={() => {
              window.location.href = KAKAO_AUTH_URL
            }}
          ></Button>
          <Button
            _width="100%"
            _height="48px"
            buttonType="tertiary"
            text="애플 로그인"
            _onClick={() => {
              window.location.href = APPLE_AUTH_URL
            }}
          ></Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default LoginModal
