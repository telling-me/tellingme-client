import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { Dropdown } from 'components'

// data
import { mbtiData } from 'data/mbti'

interface IModifyMbti {
  mbti: string | null
  setMbti: React.Dispatch<React.SetStateAction<string | null>>
}

const ModifyMbti = ({ mbti, setMbti }: IModifyMbti) => {
  return (
    <>
      <TextP typo="h6" textColor="black" _margin="0px 0px 8px 10px">
        mbti
      </TextP>

      <Dropdown
        defaultText="mbti 선택"
        dropdownSize="large"
        data={mbtiData}
        _selected={mbti}
        _setSelected={setMbti}
        direction="up"
      />
    </>
  )
}

const { TextP } = style

export default ModifyMbti
