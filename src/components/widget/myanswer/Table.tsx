import React from 'react'
import type { ITable } from './type'
import styled from 'styled-components'
import { TableCell } from 'components'

const Table = ({ data }: ITable) => {
  return (
    <TableWrapper>
      {data.map((v, i) => {
        return <TableCell key={i} emotion={v[0]} question={v[1]} date={v[2]} />
      })}
    </TableWrapper>
  )
}

const TableWrapper = styled.div`
  height: 100%;
  margin-top: 250px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

export default Table
