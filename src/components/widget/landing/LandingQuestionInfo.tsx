import React, { useEffect, useRef } from 'react'

// components
import Icon from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

// animation
import { motion } from 'framer-motion'

// store
import useCommonStore from 'stores/useCommonStore'

// hooks
import useWindowSize from 'hooks/useWindowSize'

const LandingQuestionInfo = () => {
  const theme = useTheme()
  const windowSize = useWindowSize()

  const { landingScrollY, setLandingScrollY } = useCommonStore()

  const infoRef = useRef<HTMLDivElement>(null)

  // scroll할 Y값 저장
  useEffect(() => {
    setLandingScrollY(infoRef.current?.offsetTop as number)
  }, [windowSize])

  // scroll event
  useEffect(() => {
    const wheelHandler = (e: any) => {
      // 스크롤을 올릴 때 가장 최상단으로 이동
      if (e.deltaY < 0 && window.scrollY <= landingScrollY) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    infoRef.current?.addEventListener('wheel', wheelHandler, { passive: false })
    return () => {
      infoRef.current?.removeEventListener('wheel', wheelHandler)
    }
  }, [])

  return (
    <QuestionInfo ref={infoRef}>
      <Grid>
        <Grid flex="center" direction="column" _gap="32px">
          <Grid flex="center" direction="column" _gap="8px">
            <TextH1 typo="h1" textColor="logo">
              하루 한 번,
            </TextH1>
            <Grid flex="center" _gap="8px" wrap="wrap">
              <TextH1 typo="h1" textColor="logo">
                질문에 답변하며
              </TextH1>
              <TextH1 typo="h1_b" textColor="logo">
                나를 깨닫는 시간
              </TextH1>
            </Grid>
          </Grid>
          <Grid flex="center" _gap="8px" wrap="wrap">
            <TextH2 typo="h2" textColor="gray8">
              땡땡땡땡한 질문이
            </TextH2>
            <TextH2 typo="h2" textColor="gray8">
              매일 오전 6시에 오픈돼요!
            </TextH2>
          </Grid>
        </Grid>
        <TimeChanger>Time Changer</TimeChanger>
        <QuestionChanger>
          <PhoneWrapper>
            <PhoneHeader flex="between">
              <Icon.Logo width="81" />
              <Icon.Setting width="20" stroke={theme.colors.gray.gray6} />
            </PhoneHeader>
            <Grid flex="center">
              <AnswerCount>
                <AnswerText typo="c" textColor="gray5">
                  연속 <span>1</span>일째 답변중
                </AnswerText>
              </AnswerCount>
            </Grid>
          </PhoneWrapper>
        </QuestionChanger>
      </Grid>
    </QuestionInfo>
  )
}
export default LandingQuestionInfo

const { Grid, TextH1, TextH2, TextP } = style

const QuestionInfo = styled(motion.div)`
  ${({ theme }) => theme.common.flexCenter}
  height: 1680px;
  overflow: hidden;
`

const TimeChanger = styled(motion.div)`
  height: 200px;
  background-color: #fafafa;
`

const QuestionChanger = styled(motion.div)``

const PhoneWrapper = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.side.side100};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
  border-radius: 36px 36px 0 0;
  height: 648px;
  width: 375px;
`

const PhoneHeader = styled(Grid)`
  padding: 20px 21px 12px 25px;
`

const AnswerCount = styled(Grid)`
  width: fit-content;
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  box-shadow: ${({ theme }) => theme.shadow.shadow1};
`

const AnswerText = styled(TextP)`
  span {
    color: ${({ theme }) => theme.colors.logo};
  }
`
