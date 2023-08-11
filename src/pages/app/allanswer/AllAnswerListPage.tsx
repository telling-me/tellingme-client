import React, { useEffect } from 'react'
import styled from 'styled-components'

// stores
import useCommunicationStore from 'stores/useCommunicationStore'

// components
import { ListHeader, ListAnswers, ListSorts, ListFooter } from 'components'

const AllAnswerListPage = () => {
  const { setSortIdx, setPage } = useCommunicationStore()

  useEffect(() => {
    setSortIdx(2)
    setPage(0)
  }, [])

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

  @media all and (min-width: 767px) and (max-width: 1199px) {
    padding: 0 60px;
  }

  @media all and (max-width: 767px) {
    padding: 0 25px;
  }
`

export default AllAnswerListPage
