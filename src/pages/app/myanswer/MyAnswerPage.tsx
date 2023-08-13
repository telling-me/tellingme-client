import React, { useState } from 'react'
import styled from 'styled-components'

// components
import { TableHeader, Table, NoneData, CardView, Loading } from 'components'

// hooks
import { useGetMyAnswerListQuery } from 'hooks'

// stores
import useAnswerStore from 'stores/useAnswerStore'

const MyAnswerPage = () => {
  const [isVertical, setIsVertical] = useState(false)
  const { myAnswerFilter } = useAnswerStore()

  const { data: { data: myAnswer = null } = {}, isLoading } = useGetMyAnswerListQuery(
    myAnswerFilter.month,
    myAnswerFilter.year
  )

  const handleChangeMode = () => {
    setIsVertical(!isVertical)
  }

  return (
    <MyAnswerWrapper>
      <TableHeader isSelected={isVertical} _onClick={handleChangeMode} />
      {isLoading ? (
        <Loading />
      ) : myAnswer === null || myAnswer === undefined || myAnswer?.length === 0 ? (
        <NoneData />
      ) : isVertical ? (
        <Table data={myAnswer} />
      ) : (
        <CardView data={myAnswer} />
      )}
    </MyAnswerWrapper>
  )
}

const MyAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  transition: 2s;
`

export default MyAnswerPage
