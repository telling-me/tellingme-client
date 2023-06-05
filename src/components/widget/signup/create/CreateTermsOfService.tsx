import React from 'react'

// components
import { CheckBox } from 'components'

interface ICreateTermsOfService {
  isAgree: boolean
  setIsAgree: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTermsOfService = ({ isAgree, setIsAgree }: ICreateTermsOfService) => {
  return (
    <CheckBox
      label="전체 동의합니다"
      buttonText="전문 보기"
      _checked={isAgree}
      setChecked={setIsAgree}
      _maxWidth="425px"
    />
  )
}

export default CreateTermsOfService
