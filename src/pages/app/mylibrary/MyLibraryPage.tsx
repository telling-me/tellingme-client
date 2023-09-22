import React from 'react'
import styled from 'styled-components'

// components
import { MyAnswerTable, MyLibraryTableHeader, MyAnswerNoneData, Loading } from 'components'

// hooks
import { useGetMyAnswerListQuery } from 'hooks'

// stores
import useLibraryStore from 'stores/useLibraryStore'

const MyLibraryPage = () => {
  const { myLibraryFilter } = useLibraryStore()

  const { data: { data: myAnswer = null } = {}, isLoading } = useGetMyAnswerListQuery(
    myLibraryFilter.month,
    myLibraryFilter.year
  )

  return (
    <MyLibraryWrapper>
      <MyLibraryTableHeader />
      {isLoading ? (
        <Loading />
      ) : myAnswer === null || myAnswer === undefined || myAnswer?.length === 0 ? (
        <MyAnswerNoneData />
      ) : (
        <MyAnswerTable data={myAnswer} />
      )}
    </MyLibraryWrapper>
  )
}

const MyLibraryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);

  transition: 2s;
`

export default MyLibraryPage
