import React from 'react'
import { ContentWrapper } from './style'

// assets
import Icons from 'assets/icons'

// data
import { genderData } from 'data/user'

// components
import { ColButton } from 'components'

// hooks
import useChangeColor from 'hooks/useChangeColor'

interface ICreateGender {
  gender: string
  setGender: React.Dispatch<React.SetStateAction<string>>
}

const CreateGender = ({ gender, setGender }: ICreateGender) => {
  return (
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
  )
}

export default CreateGender
