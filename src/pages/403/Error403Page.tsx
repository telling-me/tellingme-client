/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, LoginModal } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import { useWindowSize } from 'hooks'

const ErrorPage = () => {
  const [open, setOpen] = useState(false)
  const windowWidth = useWindowSize().width

  return (
    <>
      <NoneDataWrapper flex="center" direction="column" _gap="8px">
        <Icons.OverhaulDuei width={windowWidth < 768 ? '120' : '190'} height={windowWidth < 768 ? '120' : '190'} />

        <Grid flex="center" direction="column">
          <TextP typo="h2" textColor="logo" _margin="8px 0 20px">
            403
          </TextP>

          <TextP typo="h6_b" textColor="gray8" _margin="0 0 12px 0">
            접속 오류가 발생했어요.
          </TextP>

          <Grid flex="center" direction="column" wrap="wrap">
            <TextP typo="b2" textColor="gray8" _margin="8px 0">
              오류가 생겨서 페이지 접속이 어려워요.&nbsp;
            </TextP>
            <TextP typo="b2" textColor="gray8">
              다시 로그인해주세요.
            </TextP>
          </Grid>
          {/* (2차 배포 준비로 인해 주석 처리) */}
          {/* <Button
            buttonType="secondary"
            text="로그인 할게요"
            _margin="24px 0 0 0"
            _padding="18px 32px"
            textSize="h6"
            textColor="logo"
            _onClick={() => {
              setOpen(true)
            }}
          /> */}
        </Grid>
      </NoneDataWrapper>

      {/* {open && <LoginModal setOpen={setOpen} />} */}
    </>
  )
}
const { Grid, TextP } = style

const NoneDataWrapper = styled(Grid)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

export default ErrorPage
