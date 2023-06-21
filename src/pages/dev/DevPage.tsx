import React from 'react'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components'
import { apis } from 'apis/apis'

const DevPage = () => {
  return (
    <NoneDataWrapper flex="center" direction="column" _gap="8px">
      <Grid flex="center" direction="column">
        <Button
          buttonType="secondary"
          text="500에러 내기"
          _margin="24px 0 0 0"
          _padding="18px 32px"
          textSize="h6"
          textColor="logo"
          _onClick={() => {
            void apis.get500Error().then((res) => {
              console.log(res)
            })
          }}
        />
      </Grid>
    </NoneDataWrapper>
  )
}
const { Grid } = style

const NoneDataWrapper = styled(Grid)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

export default DevPage
