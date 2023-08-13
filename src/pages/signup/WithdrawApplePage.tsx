import React from 'react'
import { useLocation } from 'react-router-dom'

// hooks
// import { useDeleteUser } from 'hooks'
import style from 'styles/styled-components/styled'
import { Loading } from 'components'

const WithdrawApplePage = () => {
  const hash = useLocation().hash
  console.log(hash)
  const code = new URLSearchParams(hash).get('code')

  // const { mutate } = useDeleteUser()

  console.log(code)

  // mutate({ oauthtoken: code as string })

  return (
    <Grid _width="100%" _height="100vh" flex="center">
      <Loading />
    </Grid>
  )
}

const { Grid } = style

export default WithdrawApplePage
