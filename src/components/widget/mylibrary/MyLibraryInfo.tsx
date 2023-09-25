import React from 'react'

// type
import { type ILibraryInfoData } from './type'

// styles
import style from 'styles/styled-components/styled'
import styled from 'styled-components'

const MyLibraryInfo = ({ data }: { data: ILibraryInfoData }) => {
  return (
    <InfoWrapper flex="start" direction="column" _gap="8px">
      <Grid flex="start">
        <TextP typo="h5">{data.month}</TextP>
        <TextP typo="h5">월 한 달 동안</TextP>
      </Grid>
      <Grid flex="start">
        <TextP typo="h5">총</TextP>
        <TextP typo="h5_b" textColor="logo">
          {data.answerLength}
        </TextP>
        <TextP typo="h5">권을 채웠어요!</TextP>
      </Grid>
    </InfoWrapper>
  )
}

const { TextP, Grid } = style

const InfoWrapper = styled(Grid)`
  transition: 0.2s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 0px 28px 0px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 24px 60px 28px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 24px 25px 28px 25px;
  }
`

export default MyLibraryInfo
