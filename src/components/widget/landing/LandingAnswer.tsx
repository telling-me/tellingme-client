/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

// react-slick
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// utils
import { mediaQuery } from 'utils/mediaQuery'

const LandingAnswer = () => {
  const windowSize = useWindowSize()
  const settings = {
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    arrows: false
  }
  return (
    <>
      <AnswerWrapper>
        <Grid
          flex="center"
          direction="column"
          _gap="32px"
          _padding={mediaQuery(windowSize.width) === 'mobile' ? '120px 8px 0' : '160px 8px 0'}
        >
          <Grid flex="center" direction="column" _gap="8px">
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
              매일 매일,
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
                기록한 답변을 보며
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
                나를 되돌아봐요
              </TextH1>
            </Grid>
          </Grid>
          <Grid
            flex="center"
            _gap="8px"
            wrap="wrap"
            _padding="0 6px 0 7px"
            direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
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
              꾸준히 기록은 나에 대해
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
              더 많은 걸 알게 해줘요!
            </TextH2>
          </Grid>
        </Grid>
        <BackgroundBlur />
        <Grid
          flex="center"
          _margin={mediaQuery(windowSize.width) === 'mobile' ? '60px 0 0' : '120px 0 0'}
          direction={mediaQuery(windowSize.width) === 'desktop' ? 'row' : 'column-reverse'}
          _gap="32px"
        >
          <QuestionSlide flex="center">
            <Icon.LandingQuestionList width={mediaQuery(windowSize.width) === 'mobile' ? '232px' : '375px'} />
          </QuestionSlide>
          <AnswerSlide>
            <Slider {...settings}>
              <Icon.LandingAnswer1 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
              <Icon.LandingAnswer2 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
              <Icon.LandingAnswer2 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
              <Icon.LandingAnswer1 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
              <Icon.LandingAnswer2 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
              <Icon.LandingAnswer1 width={mediaQuery(windowSize.width) === 'mobile' ? '200px' : '303px'} />
            </Slider>
          </AnswerSlide>
        </Grid>
      </AnswerWrapper>
    </>
  )
}

const { Grid, TextH1, TextH2 } = style

const AnswerWrapper = styled.div`
  position: relative;
`

const QuestionSlide = styled(Grid)`
  max-width: 600px;
  @media all and (max-width: 1199px) {
    max-width: 100%;
  }
`

const AnswerSlide = styled(Grid)`
  max-width: 800px;
  @media all and (max-width: 1199px) {
    max-width: 100%;
  }

  svg {
    flex-shrink: 0;
  }

  .slick-track .slick-slide {
    max-height: 482px;
  }
`

const BackgroundBlur = styled.div`
  width: 100%;
  height: 109px;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255, 253, 250, 0.2) 0%, #fffdfa 100%);
`

export default LandingAnswer
