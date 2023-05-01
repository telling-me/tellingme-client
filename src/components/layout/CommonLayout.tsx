import React from 'react'
import { Outlet } from 'react-router-dom'

// animation
import { motion } from 'framer-motion'
import { AppAni } from 'styles/ani'

// components
import styled from 'styled-components'
import { Header, TabBar } from 'components'

const CommonLayout = () => {
  return (
    <ParentWrapper>
      <InnerWrapper>
        <Header />
        <Inner initial="init" animate="ani" exit="exit" variants={AppAni}>
          <Outlet />
        </Inner>
        <TabBar />
      </InnerWrapper>
    </ParentWrapper>
  )
}

const ParentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Inner = styled(motion.main)`
  width: 100%;
  height: calc(100% - 88px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CommonLayout
