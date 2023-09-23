import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { ChoiceChips } from 'components'
import { SelectInnerWrapper } from './style'

interface IModifyGender {
  gender: string | null
  setGender: React.Dispatch<React.SetStateAction<string | null>>
  canChangeGender: boolean
}

const ModifyGender = ({ gender, setGender, canChangeGender }: IModifyGender) => {
  const handleClick = (value: string) => {
    setGender(value)
  }

  return (
    <>
      <TextP typo="h6" textColor="black" _margin="0px 0px 0px 10px">
        성별
      </TextP>
      <TextP typo="c" textColor="gray7" _margin="4px 0px 16px 10px">
        설정 후 변경 불가능
      </TextP>

      <SelectInnerWrapper>
        <ChoiceChips
          chipText="남성"
          _active={gender === 'male'}
          _disabled={!canChangeGender && gender !== 'male'}
          _onClick={() => {
            if (canChangeGender) {
              handleClick('male')
            }
          }}
        />
        <ChoiceChips
          chipText="여성"
          _active={gender === 'female'}
          _disabled={!canChangeGender && gender !== 'female'}
          _onClick={() => {
            if (canChangeGender) {
              handleClick('female')
            }
          }}
        />
      </SelectInnerWrapper>
    </>
  )
}

const { TextP } = style

export default ModifyGender
