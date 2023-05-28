import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { Dropdown } from 'components'

// data
import { mbtiData } from 'data/mbti'

interface IModifyMbti {
  mbti: string | undefined
  setMbti: React.Dispatch<React.SetStateAction<string | undefined>>
}

const ModifyMbti = ({ mbti, setMbti }: IModifyMbti) => {
  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 8px 10px">
        mbti
      </style.TextP>

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

export default ModifyMbti
