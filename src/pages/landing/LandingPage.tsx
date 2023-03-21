import React from 'react'
import { CommonTest, LandingBubble } from 'components/common'
import { CoreButton, CoreDangerButton } from 'components/core/button'
import style from 'styles/styled-components/styled'

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
      </style.Grid>
    </>
  )
}

export default LoginPage
