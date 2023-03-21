import React from 'react'
import styled from 'styled-components'
import * as Queries from 'hooks/index'
import Icon from 'assets/icons'

const CommonTest = () => {
  const { data: dataTest = null } = Queries.useTestQuery()
  return (
    <Title
      onClick={() => {
        console.log(dataTest)
      }}
    >
      <Icon.Menu width="32px" height="32px" />
      API TEST COMPONENT
    </Title>
  )
}

const Title = styled.h1`
  ${({ theme }) => theme.typo.title.h2};
  color: ${({ theme }) => theme.colors.gray.gray_black};
`

export default CommonTest
