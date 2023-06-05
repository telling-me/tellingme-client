import React from 'react'
import { BirthDateWrapper } from './style'

// data
import { birthDateData } from 'data/user'

// components
import { Dropdown } from 'components'

interface ICreateBirthDate {
  year: string | undefined
  setYear: React.Dispatch<React.SetStateAction<string | undefined>>
  month: string | undefined
  setMonth: React.Dispatch<React.SetStateAction<string | undefined>>
  day: string | undefined
  setDay: React.Dispatch<React.SetStateAction<string | undefined>>
}

const CreateBirthDate = ({ year, setYear, month, setMonth, day, setDay }: ICreateBirthDate) => {
  return (
    <BirthDateWrapper>
      {birthDateData.map(
        (
          v: {
            defaultText: string
            data: string[] | number[]
          },
          i: number
        ) => {
          return (
            <Dropdown
              key={i}
              dropdownSize="large"
              defaultText={v.defaultText}
              data={v.data}
              _selected={i === 0 ? year : i === 1 ? month : day}
              _setSelected={i === 0 ? setYear : i === 1 ? setMonth : setDay}
            />
          )
        }
      )}
    </BirthDateWrapper>
  )
}

export default CreateBirthDate
