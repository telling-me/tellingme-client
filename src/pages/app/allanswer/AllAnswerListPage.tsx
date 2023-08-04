/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

// stores
import styled from 'styled-components'

// components
import { ListHeader, ListAnswers, ListSorts, ListFooter } from 'components'

const AllAnswerListPage = () => {
  return (
    <AllAnswerListWrapper>
      <ListHeader />
      <ListSorts />
      <ListAnswers />
      <ListFooter />
    </AllAnswerListWrapper>
  )
}

const AllAnswerListWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
  height: 100vh;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
  }

  @media all and (min-width: 768px) and (max-width: 1999px) {
    padding: 0 60px;
  }

  @media all and (max-width: 767px) {
    padding: 0 25px;
  }
`

export default AllAnswerListPage
