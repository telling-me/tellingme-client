import React from 'react'
import type { IMyAnswer } from './type'
import styled from 'styled-components'
import { TableCell } from 'components'

const Table = ({ data }: IMyAnswer) => {
  return (
    <TableWrapper>
      {data?.map((v, i) => {
        return <TableCell key={i} emotion={v?.emotion} question={v?.title} date={v?.date} />
      })}
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 250px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

export default Table
