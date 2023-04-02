import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const LandingLayout = () => {
  return (
    <ParentWrapper>
      <Outlet />
    </ParentWrapper>
  )
}

const ParentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export default LandingLayout
