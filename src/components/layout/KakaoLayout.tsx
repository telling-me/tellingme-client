import React from 'react'
import { useNavigate } from 'react-router-dom'

// configs
import { REDIRECT_URI, REST_API_KEY } from 'configs/kakao'

// hooks
import { useKakaoQueries, useSaveToken } from 'hooks'

// components
import { Loading } from 'components'

// styles
import style from 'styles/styled-components/styled'

const KakaoLayout = () => {
  const AUTHORIZATION_CODE: string = new URL(document.location.toString()).searchParams.get('code') as string

  const navigate = useNavigate()

  try {
    const res: any = useKakaoQueries({
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: AUTHORIZATION_CODE
    })[1]

    if (res.isError === true) {
      navigate('/signup', {
        state: {
          socialId: res.error.response.data.socialId,
          socialLoginType: res.error.response.data.socialLoginType
        }
      })
    } else {
      useSaveToken({
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken
      })
      navigate('/app/main')
    }
  } catch (err: unknown) {}

  return (
    <Grid _width="100%" _height="100vh" flex="center">
      <Loading />
    </Grid>
  )
}

const { Grid } = style

export default KakaoLayout
