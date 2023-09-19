import React from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// hooks
import { useGetAnswerRecordCountQuery } from 'hooks'

// utils
import { formatStringDate } from 'utils/date'

const ContinuousDate = () => {
  // 새벽 6시 업데이트
  const today = new Date(new Date().getTime() - 6 * 60 * 60 * 1000)

  const { data: { data: answer = null } = {} } = useGetAnswerRecordCountQuery(formatStringDate(today))
  return (
    <DateWrapper flex="center" _width="max-content" _padding="10px 12px" _margin="8px 0 0 0">
      {answer?.count > 0 ? (
        <TextP typo="c_b" textColor="gray5">
          연속 <span>{answer?.count}</span>일째 기록 중!
        </TextP>
      ) : (
        <TextP typo="c_b" textColor="gray5">
          오늘도 <span>진정한 나</span>를 만나봐요!
        </TextP>
      )}
    </DateWrapper>
  )
}

const { TextP, Grid } = style

const DateWrapper = styled(Grid)`
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
