import React from 'react'

// type
import { type ILibraryData } from './type'

// style
import style from 'styles/styled-components/styled'
import styled from 'styled-components'

// hooks
import useChangeColor from 'hooks/useChangeColor'
import Icons from 'assets/icons'

const MyLibraryWeek = ({ data, week }: { data: ILibraryData[]; week: number }) => {
  return (
    <LibraryWeekWrapper flex="start" _gap="24px">
      <Grid _width="max-content" flex="start" direction="column" _gap="2px">
        <TextP typo="c_b" textColor="side500">
          week
        </TextP>
        <WeekBox _width="max-content" _padding="4px 12px">
          <TextP typo="b2" textColor="side500">
            {week}
          </TextP>
        </WeekBox>
      </Grid>
      <LibraryWrapper _width="max-content" flex="start" direction="column">
        <BookWrapper flex="start" _gap="3px" _alignItems="end" _padding="0 0 0 16px">
          {data.map((answer: ILibraryData, idx: number) => {
            if (week === 5)
              return (
                <>
                  {answer.exist && (
                    <Book
                      key={`${week}_${idx}`}
                      _width="18px"
                      _height="44px"
                      _backgroundcolor={
                        answer.exist ? useChangeColor(`emotion${answer.data.emotion}00`) : useChangeColor('side100')
                      }
                    ></Book>
                  )}
                </>
              )
            return (
              <Book
                key={`${week}_${idx}`}
                _width="18px"
                _height="44px"
                _backgroundcolor={
                  answer.exist ? useChangeColor(`emotion${answer.data.emotion}00`) : useChangeColor('side100')
                }
              ></Book>
            )
          })}
          {week === 5 && (
            <>
              <Grid _width="36px" _height="44px" flex="start" _alignItems="end">
                <Icons.LibraryProp2 />
              </Grid>

              <Grid _width="35px" _height="44px" flex="start" _alignItems="end">
                <Icons.LibraryProp1 />
              </Grid>
            </>
          )}
        </BookWrapper>
        <BookStand _width="200px" _height="8px" />
      </LibraryWrapper>
    </LibraryWeekWrapper>
  )
}

const { Grid, TextP } = style

const LibraryWeekWrapper = styled(Grid)`
  transition: 0.2s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 0 60px 0 60px;
  }

  @media all and (max-width: 767px) {
    padding: 0 25px 0 25px;
  }
`
const WeekBox = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 8px;
`

const BookWrapper = styled(Grid)``
const LibraryWrapper = styled(Grid)``

const BookStand = styled(Grid)`
  background-color: ${({ theme }) => theme.colors.sub.sub100};
`

const Book = styled(Grid)<{ _backgroundcolor: string }>`
  background-color: ${({ _backgroundcolor }) => _backgroundcolor};
  border-radius: 4px;
`

export default MyLibraryWeek
