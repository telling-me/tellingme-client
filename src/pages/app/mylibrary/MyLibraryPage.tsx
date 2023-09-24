import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// components
import {
  Loading,
  MyAnswerNoneData,
  MyLibraryTableHeader,
  MyLibraryInfo,
  MyLibraryWeek,
  MyLibraryHelpModal
} from 'components'

// hooks
import { useGetMyAnswerListQuery } from 'hooks'

// stores
import useLibraryStore from 'stores/useLibraryStore'

// type
import { type IData, type ILibraryData } from 'components/widget/mylibrary/type'

const MyLibraryPage = () => {
  const { myLibraryFilter, helpModalOn } = useLibraryStore()

  const { data: { data: myAnswer = null } = {}, isLoading } = useGetMyAnswerListQuery(
    myLibraryFilter.month,
    myLibraryFilter.year
  )

  const [day, setDay] = useState<ILibraryData[]>(
    new Array(31).fill(null).map(() => ({
      exist: false,
      data: { emotion: 0, title: '', phrase: '', date: [0, 0, 0], content: '' }
    }))
  )

  useEffect(() => {
    if (myAnswer !== null || myAnswer !== undefined || myAnswer?.length !== 0) {
      const answerDay = day
      myAnswer?.forEach((answer: IData, idx: number) => {
        console.log(answer?.date[2] - 1)
        answerDay[answer?.date[2] - 1].exist = true
        answerDay[answer?.date[2] - 1].data = answer
      })
      setDay([...answerDay])
    }
  }, [myAnswer])

  return (
    <>
      <MyLibraryWrapper>
        <MyLibraryTableHeader />
        {isLoading ? (
          <Loading />
        ) : myAnswer === null || myAnswer === undefined || myAnswer?.length === 0 ? (
          <Grid flex="start" direction="column">
            <MyLibraryInfo data={{ month: myLibraryFilter.month, answerLength: myAnswer.length }} />
            <Grid flex="center" _height="100%" _margin="0 0 175px 0">
              <MyAnswerNoneData />
            </Grid>
          </Grid>
        ) : (
          <Grid flex="start" direction="column">
            <MyLibraryInfo data={{ month: myLibraryFilter.month, answerLength: myAnswer.length }} />
            <Grid flex="start" direction="column" _gap="20px">
              {Array.from({ length: 5 })
                .fill(0)
                .map((_, idx: number) => {
                  return <MyLibraryWeek key={`${idx}`} data={day.slice(idx * 7, idx * 7 + 7)} week={idx + 1} />
                })}
            </Grid>
          </Grid>
        )}
      </MyLibraryWrapper>
      {helpModalOn && <MyLibraryHelpModal />}
    </>
  )
}

const { Grid } = style

const MyLibraryWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  /* height: 100vh; */
  height: calc((var(--vh, 1vh) * 100) - 124px);

  // header + table header
  margin-top: 124px;

  transition: 2s;

  overflow: auto;
`

export default MyLibraryPage
