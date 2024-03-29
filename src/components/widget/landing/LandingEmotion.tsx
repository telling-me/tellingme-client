import React from 'react'

// components
import Icon from 'assets/icons'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// utils
import { mediaQuery } from 'utils/mediaQuery'

// ani
import { commonOpacityYAni } from 'styles/ani'

const LandingEmotion = () => {
  const windowSize = useWindowSize()
  return (
    <EmotionInfo>
      <EmotionModal
        _height="100%"
        flex="center"
        _padding={mediaQuery(windowSize.width) === 'desktop' ? '220px 0 0 550px' : '160px 0 0 0'}
        _alignItems={mediaQuery(windowSize.width) === 'mobile' ? 'end' : 'center'}
        variants={commonOpacityYAni}
        viewport={{ once: true }}
        initial="init"
        whileInView="ani"
        custom={3}
      >
        {mediaQuery(windowSize.width) === 'mobile' ? (
          <Icon.LandingEmotionModalMobile width={200} />
        ) : (
          <Icon.LandingEmotionModal width={425} />
        )}
      </EmotionModal>
      <EmotionInfoWrapper
        flex="center"
        direction="column"
        _gap="32px"
        _padding={mediaQuery(windowSize.width) === 'mobile' ? '120px 8px 0' : '160px 8px 0'}
      >
        <Grid
          flex="center"
          direction="column"
          _gap={mediaQuery(windowSize.width) === 'mobile' ? '8px' : '10px'}
          variants={commonOpacityYAni}
          viewport={{ once: true }}
          initial="init"
          whileInView="ani"
          custom={1}
        >
          <TextH2
            typo={
              mediaQuery(windowSize.width) === 'desktop'
                ? 'h1'
                : mediaQuery(windowSize.width)?.includes('tablet') === true
                ? 'h2'
                : 'h4'
            }
            textColor="logo"
          >
            글 속에 담긴
          </TextH2>
          <Grid
            flex="center"
            _gap="8px"
            wrap="wrap"
            direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
          >
            <TextH2
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h1'
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
                  ? 'h2'
                  : 'h4'
              }
              textColor="logo"
            >
              나의 감정을
            </TextH2>
            <TextH2
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h1_b'
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
                  ? 'h2_b'
                  : 'h4_b'
              }
              textColor="logo"
            >
              듀이티콘으로 나타내요
            </TextH2>
          </Grid>
        </Grid>
        <Grid
          flex="center"
          _gap="8px"
          wrap="wrap"
          _padding="0 6px 0 7px"
          direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
          variants={commonOpacityYAni}
          viewport={{ once: true }}
          initial="init"
          whileInView="ani"
          custom={2}
        >
          <TextH3
            typo={
              mediaQuery(windowSize.width) === 'desktop'
                ? 'h2'
                : mediaQuery(windowSize.width)?.includes('tablet') === true
                ? 'h3'
                : 'h6'
            }
            textColor="gray8"
          >
            총 6가지 뱁새 감정티콘으로
          </TextH3>
          <TextH3
            typo={
              mediaQuery(windowSize.width) === 'desktop'
                ? 'h2'
                : mediaQuery(windowSize.width)?.includes('tablet') === true
                ? 'h3'
                : 'h6'
            }
            textColor="gray8"
          >
            글의 감정을 정리해보세요
          </TextH3>
        </Grid>
      </EmotionInfoWrapper>
      <EmotionBackground _width="100%">
        {mediaQuery(windowSize.width) === 'mobile' ? (
          <Icon.LandingEmotionLine width="100%" />
        ) : (
          <Icon.LandingEmotionBg width="100%" />
        )}
      </EmotionBackground>
    </EmotionInfo>
  )
}

const { Grid, TextH2, TextH3 } = style

const EmotionInfo = styled.div`
  position: relative;
  overflow: hidden;

  @media all and (min-width: 1200px) {
    height: 976px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: 938px;
  }

  @media all and (max-width: 767px) {
    height: 620px;
  }
  background-color: ${({ theme }) => theme.colors.side.side200};
`

const EmotionInfoWrapper = styled(Grid)`
  position: relative;
  z-index: 1;
`

const EmotionModal = styled(Grid)`
  position: absolute;
  z-index: 1;
`

const EmotionBackground = styled(Grid)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 360px;

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding-left: 60px;
  }

  @media all and (max-width: 767px) {
    padding-left: 0;
    left: 0px;
  }
`

export default LandingEmotion
