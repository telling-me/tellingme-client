import React, { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

// animation
import { motion } from 'framer-motion'

// components
import styled from 'styled-components'
import { Header, QuestionWriteModal, TabBar, AnswerModal, NoticeAnswerModal } from 'components'
import NoticeModal from 'components/widget/main/NoticeModal'
import OnlyMobileModal from 'components/widget/OnlyMobileModal'

// hooks
import useWindowSize from 'hooks/useWindowSize'
import useSaveToken from 'hooks/useSaveToken'

// stores
import useCommonStore from 'stores/useCommonStore'

// utils
import { setCookie } from 'utils/cookies'
import useInitModal from 'hooks/useInitModal'

const CommonLayout = () => {
  const params = new URLSearchParams(window.location.search)

  const windowSize = useWindowSize()
  const { prevPage, currPage, mobileOnlyModal, setMobileOnlyModal } = useCommonStore()

  useInitModal()

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

  // ReactNative로 접속하면 cookie에 device(rn) 저장
  const setReactNative = (message: any) => {
    const data = JSON.parse(message.data)

    if (data?.device !== undefined && data?.device !== null) {
      setCookie('device', data.device, { path: '/' })
    }
  }

  // RN에서 state로 전달받은 accessToken, refreshToken 저장
  const setAccessToken = (message: any) => {
    const data = JSON.parse(message.data)

    if (data?.accessToken !== undefined && data?.accessToken !== null) {
      // token 저장 후 다시 query 실행
      useSaveToken({
        accessToken: JSON.parse(message.data).accessToken,
        refreshToken: JSON.parse(message.data).refreshToken
      })
    }
  }

  // RN에서 state를 받는 event listener
  useLayoutEffect(() => {
    document.addEventListener('message', setReactNative)
    document.addEventListener('message', setAccessToken)

    return () => {
      document.removeEventListener('message', setReactNative)
      document.removeEventListener('message', setAccessToken)
    }
  }, [])

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
      {params.get('notice') != null && <NoticeModal />}
      {params.get('noticeAnswer') != null && <NoticeAnswerModal />}
      {Boolean(mobileOnlyModal) && (
        <OnlyMobileModal
          handleClose={() => {
            setMobileOnlyModal(false)
          }}
        />
      )}
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
