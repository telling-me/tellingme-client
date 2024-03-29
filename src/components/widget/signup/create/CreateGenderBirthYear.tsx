import React from 'react'
import { ContentWrapper } from './style'

// assets
import Icons from 'assets/icons'

// data
import { genderData } from 'data/user'

// components
import { ColButton, Input } from 'components'
import style from 'styles/styled-components/styled'

// hooks
import useChangeColor from 'hooks/useChangeColor'

interface ICreateGenderBirthYear {
  gender: string | null
  setGender: React.Dispatch<React.SetStateAction<string | null>>
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
  yearErrorText: string
  isYearError: boolean
  setIsYearError: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateGenderBirthYear = ({
  gender,
  setGender,
  year,
  setYear,
  yearErrorText,
  isYearError,
  setIsYearError
}: ICreateGenderBirthYear) => {
  return (
    <>
      <Input
        _placeholder="ex. 1990"
        _type="number"
        errorText={yearErrorText}
        isError={isYearError}
        setIsError={setIsYearError}
        _value={year}
        setValue={setYear}
        _maxWidth="425px"
        _margin="0 0 70px 0"
      />

      <TextP typo="h4" textColor="black" _margin="0 0 52px 0">
        성별을 알려주세요
      </TextP>

      <ContentWrapper type="gender">
        {genderData.map((v: string, i: number) => {
          return (
            <ColButton
              key={i}
              text={v}
              _active={(gender === 'male' && v === '남성') || (gender === 'female' && v === '여성')}
              _onClick={() => {
                setGender(i === 0 ? 'male' : 'female')
              }}
            >
              {i === 0 ? (
                <Icons.Male width="32" height="32" stroke={useChangeColor('secondary700')} />
              ) : (
                <Icons.Female width="32" height="32" stroke={useChangeColor('error300')} />
              )}
            </ColButton>
          )
        })}
      </ContentWrapper>
    </>
  )
}

const { TextP } = style

export default CreateGenderBirthYear
