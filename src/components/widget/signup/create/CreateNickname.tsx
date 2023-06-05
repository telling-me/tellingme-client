import React from 'react'

// components
import { Input } from 'components'

interface ICreateNickname {
  errorText: string
  isError: boolean
  setIsError: React.Dispatch<React.SetStateAction<boolean>>
  nickname: string
  setNickname: React.Dispatch<React.SetStateAction<string>>
}

const CreateNickname = ({ errorText, isError, setIsError, nickname, setNickname }: ICreateNickname) => {
  return (
    <Input
      _placeholder="2-8글자 이내"
      infoText="영문, 숫자, 띄어쓰기, 특수문자 불가"
      errorText={errorText}
      isError={isError}
      setIsError={setIsError}
      _value={nickname}
      setValue={setNickname}
      _maxWidth="425px"
    />
  )
}

export default CreateNickname
