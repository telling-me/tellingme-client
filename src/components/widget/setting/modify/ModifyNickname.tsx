import React from 'react'

// component
import { Input } from 'components'

interface IModifyNickname {
  nickname: string
  setNickname: React.Dispatch<React.SetStateAction<string>>
}

const ModifyNickname = ({ nickname, setNickname }: IModifyNickname) => {
  return (
    <Input
      _placeholder="2-8글자 이내"
      label="닉네임 (2-8글자 이내)"
      infoText="영문, 숫자, 띄어쓰기, 특수문자 불가"
      _value={nickname}
      setValue={setNickname}
      _margin="20px 0px 0px 0px"
    />
  )
}

export default ModifyNickname
