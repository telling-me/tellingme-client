import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { Dropdown } from 'components'
import { SelectInnerWrapper } from './style'

interface IModifyBirth {
  year: string | undefined
  setYear: React.Dispatch<React.SetStateAction<string | undefined>>
  month: string | undefined
  setMonth: React.Dispatch<React.SetStateAction<string | undefined>>
  day: string | undefined
  setDay: React.Dispatch<React.SetStateAction<string | undefined>>
}

const ModifyBirth = ({ year, setYear, month, setMonth, day, setDay }: IModifyBirth) => {
  const birthDateData: Array<{
    defaultText: string
    data: string[] | number[]
    _selected: string | undefined
    _setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
  }> = [
    {
      defaultText: '년\u00a0\u00a0\u00a0',
      data: new Array(70).fill(0).map((_, i) => 2023 - i),
      _selected: year,
      _setSelected: setYear
    },
    {
      defaultText: '월',
      data: new Array(12).fill(0).map((_, i) => i + 1),
      _selected: month,
      _setSelected: setMonth
    },
    {
      defaultText: '일',
      data: new Array(31).fill(0).map((_, i) => i + 1),
      _selected: day,
      _setSelected: setDay
    }
  ]

  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 0px 10px">
        생년월일
      </style.TextP>
      <style.TextP typo="c" textColor="gray7" _margin="4px 0px 16px 10px">
        설정 후 변경 불가능
      </style.TextP>

      <SelectInnerWrapper>
        {birthDateData.map((data, i) => {
          return (
            <Dropdown
              key={i}
              dropdownSize="large"
              defaultText={data.defaultText}
              data={data.data}
              _selected={data._selected}
              _setSelected={data._setSelected}
            />
          )
        })}
      </SelectInnerWrapper>
    </>
  )
}

export default ModifyBirth
