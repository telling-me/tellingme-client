import React from 'react'
import { Outlet } from 'react-router-dom'

// animation
import { motion } from 'framer-motion'

// components
import styled from 'styled-components'
import { Header, TabBar } from 'components'
import useWindowSize from 'hooks/useWindowSize'
import useCommonStore from 'stores/useCommonStore'

const CommonLayout = () => {
  const windowSize = useWindowSize()
  const { prevPage, currPage } = useCommonStore()

  const AppAni = {
    init: {
      x: window.innerWidth < 1024 ? (prevPage < currPage ? '150%' : '-150%') : 0,
      y: window.innerWidth < 1024 ? 0 : prevPage < currPage ? '150%' : '-150%',
      transition: { type: 'spring', duration: 0 }
    },
    ani: {
      x: 0,
      y: 0,
      transition: { type: 'spring', duration: 0.6 }
    },
    exit: {
      x: windowSize.width < 1024 ? (prevPage < currPage ? '-150%' : '150%') : 0,
      y: windowSize.width < 1024 ? 0 : prevPage < currPage ? '-150%' : '150%',
      transition: { type: 'spring', duration: 0.6 }
    }
  }

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
  background-color: ${({ theme }) => theme.colors.side.side100};
`

const Inner = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default CommonLayout
