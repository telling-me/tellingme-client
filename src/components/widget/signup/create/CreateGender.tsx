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

interface ICreateGender {
  gender: string | null
  setGender: React.Dispatch<React.SetStateAction<string | null>>
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
}

const CreateGender = ({ gender, setGender, year, setYear }: ICreateGender) => {
  const nowYear = new Date().getFullYear()

  return (
    <>
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

      <style.TextP typo="h4" textColor="black" _margin="72px 0 52px 0">
        출생 연도를 알려주세요
      </style.TextP>

      <Input
        _placeholder="ex. 1990"
        errorText={
          parseInt(year) < nowYear - 100
            ? `${nowYear - 100}년 이상부터 입력이 가능합니다.`
            : parseInt(year) > nowYear
            ? `${nowYear}년 이하부터 입력이 가능합니다.`
            : '형식이 맞지 않습니다. 다시 입력해주세요.'
        }
        isError={parseInt(year) < nowYear - 100 || parseInt(year) > nowYear}
        _value={year}
        setValue={setYear}
        _maxWidth="425px"
      />
    </>
  )
}

export default CreateGender
