import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Icon from 'assets/icons'
import { Button } from 'components'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const NoneData = () => {
  const navigate = useNavigate()

  return (
    <NoneDataWrapper flex="center" direction="column" _gap="8px">
      <Icon.NotFound width={140} />
      <Grid flex="center" direction="column" _gap="24px">
        <TextP typo="b1_b" textColor="gray8">
          아직 등록된 답변이 없어요!
        </TextP>
        <Button
          buttonType="secondary"
          text="답변하러 갈래요"
          _padding="18px 32px"
          textSize="h6"
          textColor="logo"
          _onClick={() => {
            navigate('/app/main')
          }}
        />
      </Grid>
    </NoneDataWrapper>
  )
}
const { Grid, TextP } = style

const NoneDataWrapper = styled(Grid)``

export default NoneData
