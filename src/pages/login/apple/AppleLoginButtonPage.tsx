import React from 'react'

// config
import { APPLE_LOGIN_CLIENT_ID, APPLE_LOGIN_REDIRECT_URL } from 'configs/apple'

// component
import { Button } from 'components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LoginButtonPage = () => {
  const config = {
    client_id: APPLE_LOGIN_CLIENT_ID, // This is the service ID we created.
    redirect_uri: APPLE_LOGIN_REDIRECT_URL, // As registered along with our service ID
    response_type: 'code id_token',
    scope: '', // To tell apple we want the user name and emails fields in the response it sends us.
    response_mode: 'fragment',
    m: 11,
    v: '1.5.4'
  }

  const queryString = Object.entries(config)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join('&')
  const href = `https://appleid.apple.com/auth/authorize?${queryString}`
  return (
    <>
      <LoginButtonWrapper>
        <Link to={href}>
          <Button
            buttonType="tertiaryModified"
            contentType="text"
            text="애플 로그인 테스트"
            textColor="primary800"
            textSize="h2"
            _onClick={() => {
              window.location.href = href
            }}
          />
          <div id="appleid-signin"></div>
        </Link>
      </LoginButtonWrapper>
    </>
  )
}

const LoginButtonWrapper = styled.div`
  height: 100%;
  ${({ theme }) => theme.common.flexCenter}
`

export default LoginButtonPage
