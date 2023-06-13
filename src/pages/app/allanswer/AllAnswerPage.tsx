import { Ready } from 'components/widget'
import React from 'react'

// components
import styled from 'styled-components'

const AllAnswerPage = () => {
  return (
    <AllAnswerWrapper>
      <Ready />
    </AllAnswerWrapper>
  )
}

const AllAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default AllAnswerPage
