import { Button, Input } from 'components/core'
import React from 'react'
import styled from 'styled-components'

interface IAdminLogin {
  pw: string
  setPw: React.Dispatch<React.SetStateAction<string>>
  _onClick: () => void
}

const AdminLogin = ({ pw, setPw, _onClick }: IAdminLogin) => {
  return (
    <AdminLoginWrapper>
      <Input _placeholder="비밀번호를 입력해주세요" _type="password" _value={pw} setValue={setPw} _maxWidth="425px" />
      <Button
        buttonType="secondary"
        text="로그인"
        textSize="b1_b"
        textColor="logo"
        _padding="20px 30px"
        _onClick={_onClick}
      />
    </AdminLoginWrapper>
  )
}

const AdminLoginWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  gap: 8px;

  height: 100vh;
`

export default AdminLogin
