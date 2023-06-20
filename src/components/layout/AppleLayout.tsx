import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// hooks
import { useAppleQueries, useSaveToken } from 'hooks'
import style from 'styles/styled-components/styled'
import { Loading } from 'components'

const AppleLayout = () => {
  const [idToken] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token=')[1])

  const navigate = useNavigate()

  try {
    const res: any = useAppleQueries({ idToken })[0]

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

export default AppleLayout
