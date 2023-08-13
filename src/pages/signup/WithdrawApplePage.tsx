import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

// hooks
import { useDeleteUser } from 'hooks'
import style from 'styles/styled-components/styled'
import { Loading } from 'components'

const WithdrawApplePage = () => {
  const [code] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token')[0])

  const { mutate } = useDeleteUser()

  try {
    mutate({ code })
  } catch (error: unknown) {
    console.log(error)
  }

  return (
    <Grid _width="100%" _height="100vh" flex="center">
      <Loading />
    </Grid>
  )
}

const { Grid } = style

export default WithdrawApplePage
