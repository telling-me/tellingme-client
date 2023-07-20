import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { Input } from 'components'
import { SelectInnerWrapper } from './style'

interface IModifyBirth {
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
  canChangeBirthDate: boolean
}

const ModifyBirth = ({ year, setYear, canChangeBirthDate }: IModifyBirth) => {
  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 0px 10px">
        출생연도
      </style.TextP>
      <style.TextP typo="c" textColor="gray7" _margin="4px 0px 16px 10px">
        설정 후 변경 불가능
      </style.TextP>

      <SelectInnerWrapper>
        <Input _placeholder="ex. 1990" _value={year} setValue={setYear} _disabled={!canChangeBirthDate} />
      </SelectInnerWrapper>
    </>
  )
}

export default ModifyBirth
