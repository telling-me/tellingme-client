import React, { useRef } from 'react'

// components
import Icon from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

// animation
import { motion } from 'framer-motion'

// hooks
import useWindowSize from 'hooks/useWindowSize'
import { mediaQuery } from 'utils/mediaQuery'

const LandingQuestionInfo = () => {
  const theme = useTheme()
  const windowSize = useWindowSize()

  const infoRef = useRef<HTMLDivElement>(null)

  return (
    <QuestionInfo ref={infoRef}>
      <Grid>
        <Grid flex="center" direction="column" _gap="32px" _padding="0 8px">
          <Grid flex="center" direction="column" _gap="8px">
            <TextH1
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h1'
                  : mediaQuery(windowSize.width) === 'tablet'
                  ? 'h2'
                  : 'h4'
              }
              textColor="logo"
            >
              하루 한 번,
            </TextH1>
            <Grid flex="center" _gap="8px" wrap="wrap">
              <TextH1
                typo={
                  mediaQuery(windowSize.width) === 'desktop'
                    ? 'h1'
                    : mediaQuery(windowSize.width) === 'tablet'
                    ? 'h2'
                    : 'h4'
                }
                textColor="logo"
              >
                질문에 답변하며
              </TextH1>
              <TextH1
                typo={
                  mediaQuery(windowSize.width) === 'desktop'
                    ? 'h1_b'
                    : mediaQuery(windowSize.width) === 'tablet'
                    ? 'h2_b'
                    : 'h4_b'
                }
                textColor="logo"
              >
                나를 깨닫는 시간
              </TextH1>
            </Grid>
          </Grid>
          <Grid flex="center" _gap="8px" wrap="wrap" _padding="0 6px 0 7px">
            <TextH2
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h2'
                  : mediaQuery(windowSize.width) === 'tablet'
                  ? 'h3'
                  : 'h6'
              }
              textColor="gray8"
            >
              땡땡땡땡한 질문이
            </TextH2>
            <TextH2
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h2'
                  : mediaQuery(windowSize.width) === 'tablet'
                  ? 'h3'
                  : 'h6'
              }
              textColor="gray8"
            >
              매일 오전 6시에 오픈돼요!
            </TextH2>
          </Grid>
        </Grid>
        <TimeChanger flex="center" _gap="8px">
          <HourWrapper flex="center">
            <TimeText typo="h1_b" textColor="side500">
              6
            </TimeText>
          </HourWrapper>
          <TextP typo="h1_b" textColor="side500">
            :
          </TextP>

          <MinuteWrapper flex="center">
            <TimeText typo="h1_b" textColor="side500">
              0
            </TimeText>
          </MinuteWrapper>
          <SecondWrapper flex="center">
            <TimeText typo="h1_b" textColor="side500">
              0
            </TimeText>
          </SecondWrapper>
          <MeridiemWrapper _width="fit-content" flex="center">
            <TextP typo={mediaQuery(windowSize.width) === 'mobile' ? 'c_b' : 'h5_b'} textColor="side500">
              AM
            </TextP>
          </MeridiemWrapper>
        </TimeChanger>
        <QuestionChanger flex="center">
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
  overflow: hidden;
  @media all and (min-width: 1024px) {
    padding-top: 280px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding-top: 206px;
  }

  @media all and (max-width: 767px) {
    padding-top: 120px;
  }
`

const TimeChanger = styled(Grid)`
  position: relative;

  @media all and (min-width: 1024px) {
    height: 280px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    height: 260px;
  }

  @media all and (max-width: 767px) {
    height: 174px;
  }
`

const DefaultCountWrapper = styled(Grid)`
  width: 79px;
  height: 92px;
  @media all and (max-width: 767px) {
    width: 64px;
    height: 64px;
  }
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 20px;
  transition: 0.2s;
`

const HourWrapper = styled(DefaultCountWrapper)``
const MinuteWrapper = styled(DefaultCountWrapper)``
const SecondWrapper = styled(DefaultCountWrapper)``
const MeridiemWrapper = styled(Grid)`
  position: absolute;
  top: calc(50% - 32px);
  right: calc(50% - 180px);

  @media all and (max-width: 767px) {
    top: calc(50% - 20px);
    right: calc(50% - 146px);
  }
`

const TimeText = styled(TextP)`
  font-size: 56px;

  @media all and (max-width: 767px) {
    ${({ theme }) => theme.typo.title.h2_b}
  }
`

const QuestionChanger = styled(Grid)``

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
  border-radius: 8px;
`

const AnswerText = styled(TextP)`
  span {
    color: ${({ theme }) => theme.colors.logo};
  }
`
