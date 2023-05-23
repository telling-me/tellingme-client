import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { ChoiceChips } from 'components'
import { SelectInnerWrapper } from './style'

interface IModifyGender {
  gender: string
  setGender: React.Dispatch<React.SetStateAction<string>>
}

const ModifyGender = ({ gender, setGender }: IModifyGender) => {
  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 0px 10px">
        성별
      </style.TextP>
      <style.TextP typo="c" textColor="gray7" _margin="4px 0px 16px 10px">
        설정 후 변경 불가능
      </style.TextP>

      <SelectInnerWrapper>
        <ChoiceChips chipText="남성" _active={gender === 'male'} />
        <ChoiceChips chipText="여성" _active={gender === 'female'} />
      </SelectInnerWrapper>
    </>
  )
}

export default ModifyGender
