import React from 'react'

// components
import style from 'styles/styled-components/styled'
import { IconButton, Modal } from 'components'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'

// configs
import { KAKAO_AUTH_URL } from 'configs/kakao'
import { APPLE_AUTH_URL } from 'configs/apple'
import styled, { css } from 'styled-components'

interface ILoginModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginModal = ({ setOpen }: ILoginModal) => {
  const { Grid, TextH3, TextP } = style

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
          <LoginButton
            loginType="apple"
            onClick={() => {
              window.location.href = APPLE_AUTH_URL
            }}
          >
            <Icons.Apple />
            <TextP typo="b1">Apple로 계속하기</TextP>
          </LoginButton>
          <LoginButton
            loginType="kakao"
            onClick={() => {
              window.location.href = KAKAO_AUTH_URL
            }}
          >
            <Icons.Kakao />
            <TextP typo="b1">카카오로 계속하기</TextP>
          </LoginButton>
        </Grid>
      </Grid>
    </Modal>
  )
}

const LoginButton = styled.button<{ loginType: 'kakao' | 'apple' }>`
  ${({ theme }) => theme.common.flexStart}
  gap: 44px;

  border-radius: 8px;

  width: 100%;
  padding: 14px 20px;

  cursor: pointer;

  ${({ loginType }) =>
    loginType === 'kakao'
      ? css`
          background-color: #fee500;
          color: #000000;
        `
      : css`
          background-color: #000000;
          color: #ffffff;
        `}
`

export default LoginModal
