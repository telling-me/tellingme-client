import React from 'react'
import { CommonTest, LandingBubble } from 'components/common'
import { CoreButton, CoreDangerButton } from 'components/core/button'
import style from 'styles/styled-components/styled'

import { getKakaoAuthorizationCode } from 'configs/kakao'

const LoginPage = () => {
  return (
    <>
      <CommonTest />
      <LandingBubble />
      <style.Grid flex="center" _gap="1rem">
        <CoreButton size="default" styleType="outlined" isLoading={true} />
        <CoreButton size="default" styleType="filled" isLoading={false} />
        <CoreDangerButton text="danger" isLoading={true} />
        <CoreDangerButton text="danger" isLoading={false} />
        <style.TextP typo="b1">Login</style.TextP>

        <button
          onClick={() => {
            getKakaoAuthorizationCode()
          }}
        >
          카카오 로그인 테스트
        </button>
      </style.Grid>
    </>
  )
}

export default LoginPage
