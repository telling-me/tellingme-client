import React from 'react'

// components
import { Dropdown } from 'components'

// data
import { mbtiData } from 'data/mbti'

interface ICreateMbti {
  mbti: string | null
  setMbti: React.Dispatch<React.SetStateAction<string | null>>
}

const CreateMbti = ({ mbti, setMbti }: ICreateMbti) => {
  return (
    <Dropdown
      dropdownSize="large"
      defaultText="mbti 선택"
      data={mbtiData}
      _selected={mbti}
      _setSelected={setMbti}
      _maxWidth="425px"
    />
  )
}

export default CreateMbti
