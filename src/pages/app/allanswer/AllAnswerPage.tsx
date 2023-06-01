import React from 'react'
import styled from 'styled-components'

// components
import { Button } from 'components'

const AllAnswerPage = () => {
  return (
    <AllAnswerWrapper>
      <Button
        buttonType="primary"
        contentType="text"
        text="모든 사람 답변보기!"
        textSize="h6"
        textColor="error400"
        _padding="50px"
      />
    </AllAnswerWrapper>
  )
}

const AllAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default AllAnswerPage
