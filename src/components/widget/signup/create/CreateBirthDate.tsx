import React from 'react'
import { BirthDateWrapper } from './style'

// data
import { birthDateData } from 'data/user'

// components
import { Dropdown } from 'components'

interface ICreateBirthDate {
  year: string | null
  setYear: React.Dispatch<React.SetStateAction<string | null>>
  month: string | null
  setMonth: React.Dispatch<React.SetStateAction<string | null>>
  day: string | null
  setDay: React.Dispatch<React.SetStateAction<string | null>>
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
