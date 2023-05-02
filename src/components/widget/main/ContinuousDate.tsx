import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const ContinuousDate = () => {
  return (
    <DateWrapper flex="center" _width="max-content" _padding="10px 12px" _margin="8px 0 0 0">
      <style.TextP typo="c_b" textColor="gray5">
        연속 <span>123</span>일째 답변 중!
      </style.TextP>
    </DateWrapper>
  )
}

const DateWrapper = styled(style.Grid)`
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  background-color: ${({ theme }) => theme.colors.side.side100};
  border-radius: 8px;
  span {
    color: ${({ theme }) => theme.colors.logo};
  }
  position: absolute;
  top: 74px;
`

export default ContinuousDate
