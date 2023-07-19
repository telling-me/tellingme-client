import React from 'react'
import { BirthDateWrapper } from './style'

interface ICreateBirthDate {
  year: string | null
  setYear: React.Dispatch<React.SetStateAction<string | null>>
}

const CreateBirthDate = ({ year, setYear }: ICreateBirthDate) => {
  return <BirthDateWrapper>sdfsdf</BirthDateWrapper>
}

export default CreateBirthDate
