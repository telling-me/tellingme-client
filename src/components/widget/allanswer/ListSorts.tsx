import React from 'react'
import styled from 'styled-components'

// components
import { ChoiceChips } from 'components'
import useCommunicationStore from 'stores/useCommunicationStore'

const ListSorts = () => {
  const BUTTON_TEXTS = ['인기순', '관련순', '최신순']

  const { sortIdx, setSortIdx } = useCommunicationStore()

  return (
    <ListSortsWrapper>
      {BUTTON_TEXTS.map((v: string, i: number) => {
        return (
          <ChoiceChips
            key={i}
            chipText={v}
            _active={i === sortIdx}
            _onClick={() => {
              setSortIdx(i)
            }}
          />
        )
      })}
    </ListSortsWrapper>
  )
}

const ListSortsWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  gap: 8px;

  width: 100%;
  margin-bottom: 8px;
`

export default ListSorts
