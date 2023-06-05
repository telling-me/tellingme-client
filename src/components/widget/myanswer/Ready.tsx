import React from 'react'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const Ready = () => {
  return (
    <NoneDataWrapper flex="center" direction="column" _gap="8px">
      <Icon.NotFound width={140} />
      <Grid flex="center" direction="column" _gap="24px">
        <TextP typo="b1_b" textColor="gray8">
          아직 준비중이예요
        </TextP>
      </Grid>
    </NoneDataWrapper>
  )
}
const { Grid, TextP } = style

const NoneDataWrapper = styled(Grid)``

export default Ready
