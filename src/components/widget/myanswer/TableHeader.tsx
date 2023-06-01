/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dropdown } from 'components/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import NormalListButton from './NormalListButton'
import SlideListButton from './SlideListButton'
import type { IMyAnswerMode } from './type'

const TableHeader = ({ isSelected, _onClick }: IMyAnswerMode) => {
  const nowYear = new Date().getFullYear()
  const nowMonth = new Date().getMonth() + 1
  const yearData = new Array(nowYear - 2022).fill(0).map((_, i) => (2023 + i).toString() + '년')
  const monthData = new Array(12).fill(0).map((_, i) => (i + 1).toString() + '월')

  const [year, setYear] = useState<string | undefined>(nowYear.toString() + '년')
  const [month, setMonth] = useState<string | undefined>(nowMonth.toString() + '월')

  return (
    <HeaderWrapper>
      <style.Grid flex="start" _gap="8px" _width="100%">
        <Dropdown
          dropdownSize="small"
          defaultText=""
          data={yearData}
          _selected={year}
          _setSelected={setYear}
          _maxWidth="111px"
        />
        <Dropdown
          dropdownSize="small"
          defaultText=""
          data={monthData}
          _selected={month}
          _setSelected={setMonth}
          _maxWidth="94px"
        />
      </style.Grid>

      <style.Grid flex="end" _gap="6px" _width="fit-content">
        <NormalListButton isSelected={isSelected} _onClick={_onClick} />
        <SlideListButton isSelected={!isSelected} _onClick={_onClick} />
      </style.Grid>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: fixed;
  top: 66px;

  width: 100%;
  height: fit-content;

  background-color: ${(props) => props.theme.colors.side.side100};
  transition: 0.2s;

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 8px 0px 12px 0px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 8px 60px 12px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 8px 25px 12px 25px;
  }
`

export default TableHeader
