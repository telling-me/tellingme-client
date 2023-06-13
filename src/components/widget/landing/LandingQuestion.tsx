import React, { useRef } from 'react'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// react-slick
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// animation
import { motion } from 'framer-motion'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// utils
import { mediaQuery } from 'utils/mediaQuery'
import { commonOpacityYAni } from 'styles/ani'

const LandingQuestionInfo = () => {
  const windowSize = useWindowSize()
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: false,
    swipe: false,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false
  }

  const infoRef = useRef<HTMLDivElement>(null)

  return (
    <QuestionInfo ref={infoRef}>
      <Grid>
        <Grid flex="center" direction="column" _gap="32px" _padding="0 8px">
          <Grid
            flex="center"
            direction="column"
            _gap={mediaQuery(windowSize.width) === 'mobile' ? '8px' : '10px'}
            variants={commonOpacityYAni}
            initial="init"
            whileInView="ani"
            custom={1}
          >
            <TextH1
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h1'
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
                  ? 'h2'
                  : 'h4'
              }
              textColor="logo"
            >
              하루 한 번,
            </TextH1>
            <Grid
              flex="center"
              _gap="8px"
              wrap="wrap"
              direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
            >
              <TextH1
                typo={
                  mediaQuery(windowSize.width) === 'desktop'
                    ? 'h1'
                    : mediaQuery(windowSize.width)?.includes('tablet') === true
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
                    : mediaQuery(windowSize.width)?.includes('tablet') === true
                    ? 'h2_b'
                    : 'h4_b'
                }
                textColor="logo"
              >
                나를 깨닫는 시간
              </TextH1>
            </Grid>
          </Grid>
          <Grid
            flex="center"
            _gap="8px"
            wrap="wrap"
            _padding="0 6px 0 7px"
            direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
            variants={commonOpacityYAni}
            initial="init"
            whileInView="ani"
            custom={2}
          >
            <TextH2
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h2'
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
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
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
                  ? 'h3'
                  : 'h6'
              }
              textColor="gray8"
            >
              매일 오전 6시에 오픈돼요!
            </TextH2>
          </Grid>
        </Grid>
        <TimeChanger
          flex="center"
          _gap="8px"
          _width="fit-content"
          variants={commonOpacityYAni}
          initial="init"
          whileInView="ani"
          custom={3}
        >
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
        <QuestionChanger flex="center" variants={commonOpacityYAni} initial="init" whileInView="ani" custom={4}>
          <QuestionList flex="center">
            <QuestionBubble flex="center">
              <Icon.Bubble
                width={mediaQuery(windowSize.width) === 'mobile' ? '26px' : '43px'}
                height={mediaQuery(windowSize.width) === 'mobile' ? '21px' : '35px'}
              />
            </QuestionBubble>
            <Icon.LandingQuestionList width={mediaQuery(windowSize.width) === 'mobile' ? '232px' : '375px'} />
          </QuestionList>
          <QuestionSlider>
            <Slider {...settings}>
              <Icon.LandingQuestion1 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '325px'} />
              <Icon.LandingQuestion2 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '325px'} />
              <Icon.LandingQuestion3 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '325px'} />
              <Icon.LandingQuestion4 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '325px'} />
              <Icon.LandingQuestion5 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '325px'} />
            </Slider>
          </QuestionSlider>
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

  @media all and (min-width: 1200px) {
    padding-top: 280px;
  }

  @media all and (min-width: 1024px) and (max-width: 1199px) {
    padding-top: 206px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding-top: 180px;
  }

  @media all and (max-width: 767px) {
    padding-top: 120px;
  }
`

const TimeChanger = styled(Grid)`
  position: relative;

  @media all and (min-width: 1200px) {
    margin: 68px auto 140px;
  }

  @media all and (min-width: 1024px) and (max-width: 1199px) {
    margin: 68px auto 120px;
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 68px auto 120px;
  }

  @media all and (max-width: 767px) {
    margin: 42px auto 60px;
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
  right: -42px;

  @media all and (max-width: 767px) {
    right: -34px;
  }
`

const TimeText = styled(TextP)`
  font-size: 56px;

  @media all and (max-width: 767px) {
    ${({ theme }) => theme.typo.title.h2_b};
  }
`

const QuestionChanger = styled(Grid)`
  position: relative;
  transition: 0.3s;
  height: 648px;

  @media all and (max-width: 767px) {
    height: 400px;
  }
`

const QuestionList = styled(Grid)`
  position: absolute;
  bottom: 0;

  svg {
    filter: drop-shadow(${({ theme }) => theme.shadow.shadow1});
  }
`

const QuestionBubble = styled(Grid)`
  position: absolute;
  bottom: 298px;
  z-index: 2;

  @media all and (max-width: 767px) {
    bottom: 184px;
  }

  svg {
    filter: drop-shadow(${({ theme }) => theme.shadow.shadow2});
  }
`

const QuestionSlider = styled(Grid)`
  padding-top: 160px;
  @media all and (max-width: 767px) {
    padding-top: 95px;
  }

  .slick-track {
    div div {
      margin: 0 20px;
    }
  }
`
