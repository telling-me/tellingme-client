import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const CommonLayout = () => {
  return (
    <Background>
      <Outlet />
    </Background>
  )
}

const Background = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary.primary800_main};

  ${({ theme }) => theme.common.flexCenter};
`
export default CommonLayout
