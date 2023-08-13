import React, { useEffect } from 'react'
import styled from 'styled-components'

// stores
import useCommunicationStore from 'stores/useCommunicationStore'

// components
import { ListHeader, ListAnswers, ListSorts, ListFooter } from 'components'

const AllAnswerListPage = () => {
  const { setSortIdx, setPage } = useCommunicationStore()

  useEffect(() => {
    setSortIdx(0)
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
  height: calc(var(--vh, 1vh) * 100);

  max-width: 1200px;
  margin: 0 60px;

  transition: 2s;

  @media all and (max-width: 767px) {
    margin: 0 25px;
  }
`

export default AllAnswerListPage
