import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

// hooks
import { useDeleteUser } from 'hooks'
import style from 'styles/styled-components/styled'
import { Loading } from 'components'

// TODO: 이 페이지는 추후에 삭제 예정
const WithdrawApplePage = () => {
  const [code] = useState<string>(useLocation().hash.split('#code=')[1].split('&id_token')[0])

  const { mutate } = useDeleteUser()

  const handleSample = () => {
    try {
      mutate({ code, socialType: 'apple' })
    } catch (error: unknown) {
      console.log(error)
    }
  }

  return (
    <Grid _width="100%" _height="100vh" flex="center">
      <Loading />
      <button onClick={handleSample}>sample</button>
    </Grid>
  )
}

const { Grid } = style

export default WithdrawApplePage
