import React from 'react'
import Icon from 'assets/icons'

// components
import style from 'styles/styled-components/styled'

// hooks
import * as Queries from 'hooks/index'

const CommonTest = () => {
  const { data: dataTest = null } = Queries.useTestQuery()
  return (
    <style.TextP
      onClick={() => {
        console.log(dataTest)
      }}
    >
      <Icon.Menu width="32px" height="32px" />
      API TEST COMPONENT
    </style.TextP>
  )
}

export default CommonTest
