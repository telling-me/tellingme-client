import React from 'react'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const NoneData = () => {
  return (
    <NoneDataWrapper flex="center" direction="column" _gap="8px">
      <Icon.NotFound width={100} />
      <TextP typo="b1_b" textColor="gray5">
        이 달에 작성한 답변이 없어요!
      </TextP>
    </NoneDataWrapper>
  )
}
const { Grid, TextP } = style

const NoneDataWrapper = styled(Grid)``

export default NoneData
