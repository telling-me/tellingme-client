import React from 'react'
import { Outlet } from 'react-router-dom'

// animation
import { motion } from 'framer-motion'

// components
import styled from 'styled-components'
import { Header, QuestionWriteModal, TabBar, AnswerModal } from 'components'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// stores
import useCommonStore from 'stores/useCommonStore'

const CommonLayout = () => {
  const params = new URLSearchParams(window.location.search)

  const windowSize = useWindowSize()
  const { prevPage, currPage } = useCommonStore()

  const PAGE_URL = window.location.href

  const AppAni = {
    init: {
      x: window.innerWidth < 1024 ? (prevPage < currPage ? '140%' : '-140%') : 0,
      y: window.innerWidth < 1024 ? 0 : prevPage < currPage ? '140%' : '-140%',
      transition: { type: 'spring', duration: 0 }
    },
    ani: {
      x: 0,
      y: 0,
      transition: { type: 'spring', duration: 0.4 }
    },
    exit: {
      x: windowSize.width < 1024 ? (prevPage < currPage ? '-140%' : '140%') : 0,
      y: windowSize.width < 1024 ? 0 : prevPage < currPage ? '-140%' : '140%',
      transition: { type: 'spring', duration: 0.4 }
    }
  }

  return (
    <>
      <ParentWrapper>
        <InnerWrapper>
          {!PAGE_URL.includes('allanswer') && <Header />}
          <Inner initial="init" animate="ani" exit="exit" variants={AppAni}>
            <Outlet />
          </Inner>
          {!PAGE_URL.includes('allanswerlist') && <TabBar />}
        </InnerWrapper>
      </ParentWrapper>
      {params.get('date') != null && <QuestionWriteModal />}
      {params.get('answerId') != null && <AnswerModal />}
    </>
  )
}

const ParentWrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
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
