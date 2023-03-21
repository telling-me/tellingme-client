import React from 'react'
import { CommonTest, LandingBubble } from 'components/common'
import { CoreButton, CoreDangerButton } from 'components/core/button'
import style from 'styles/styled-components/styled'

const LoginPage = () => {
  return (
    <>
      <CommonTest />
      <LandingBubble />
      <CoreButton size="default" styleType="outlined" isLoading={true} />
      <CoreButton size="default" styleType="filled" isLoading={false} />
      <CoreDangerButton text="danger" isLoading={true} />
      <CoreDangerButton text="danger" isLoading={false} />
      <style.TextH3 typo="b1_b">Login</style.TextH3>
    </>
  )
}

export default LoginPage
