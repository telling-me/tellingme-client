/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import styled from 'styled-components'

// components
import { TableHeader, Table } from 'components'

const MyAnswerPage = () => {
  const [isNormal, setIsNormal] = useState(true)

  const handleChangeMode = () => {
    setIsNormal(!isNormal)
  }

  const fakeData = [
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01'],
    [1, '텔링미를 사용하실 때 드는 기분은?', '2023. 03. 01']
  ]

  return (
    <MyAnswerWrapper>
      <TableHeader isSelected={isNormal} _onClick={handleChangeMode} />

      {isNormal ? <Table data={fakeData} /> : <>준비가 되지 않았숩니당 ~!</>}
    </MyAnswerWrapper>
  )
}
const MyAnswerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  transition: 2s;
`

export default MyAnswerPage
