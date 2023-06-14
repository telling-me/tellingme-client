import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button, LoginModal } from 'components'

// assets
import Icon from 'assets/icons'

// utils
import { mediaQuery } from 'utils/mediaQuery'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// ani
import { commonOpacityYAni } from 'styles/ani'

const LandingCatchPhrase = () => {
  const windowSize = useWindowSize()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  return (
    <>
      <CatchPhraseWrapper>
        {mediaQuery(windowSize.width) === 'mobile' ? null : (
          <CatchPhraseBackground>
            <Icon.LandingCatchPhraseCircle />
          </CatchPhraseBackground>
        )}
        <CatchPhraseText _height="100%" flex="center" direction="column" _gap="32px" _padding="0 8px">
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
            <TextH1
              typo={
                mediaQuery(windowSize.width) === 'desktop'
                  ? 'h1'
                  : mediaQuery(windowSize.width)?.includes('tablet') === true
                  ? 'h2'
                  : 'h6'
              }
              textColor="gray6"
            >
              나를 위한 시간,
            </TextH1>
            <Grid flex="center" _gap="8px" wrap="wrap">
              <TextH1
                typo={
                  mediaQuery(windowSize.width) === 'desktop'
                    ? 'h1'
                    : mediaQuery(windowSize.width)?.includes('tablet') === true
                    ? 'h2'
                    : 'h6'
                }
                textColor="gray6"
              >
                텔링미를
              </TextH1>
              <TextH1
                typo={
                  mediaQuery(windowSize.width) === 'desktop'
                    ? 'h1_b'
                    : mediaQuery(windowSize.width)?.includes('tablet') === true
                    ? 'h2_b'
                    : 'h6_b'
                }
                textColor="gray6"
              >
                이 순간부터 느껴봐요!
              </TextH1>
            </Grid>
            <Grid
              flex="center"
              _gap="15px"
              _margin={mediaQuery(windowSize.width) === 'desktop' ? '24px 0 0' : '16px 0 0'}
              variants={commonOpacityYAni}
              viewport={{ once: true }}
              initial="init"
              whileInView="ani"
              custom={2}
            >
              <Button
                _padding="18px 32px"
                buttonType="tertiary"
                text="텔링미 소식 구독"
                textColor="logo"
                textSize="h6"
                _onClick={() => {
                  navigate('/newsletter')
                }}
              />
              <Button
                _padding="18px 32px"
                buttonType="secondary"
                text="시작하기"
                textColor="logo"
                textSize="h6"
                _onClick={() => {
                  setOpen(true)
                }}
              />
            </Grid>
          </Grid>
        </CatchPhraseText>
      </CatchPhraseWrapper>
      {open && <LoginModal setOpen={setOpen} />}
    </>
  )
}

const { Grid, TextH1 } = style

const CatchPhraseWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media all and (min-width: 1200px) {
    height: 476px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    height: 320px;
  }

  @media all and (max-width: 767px) {
    height: 200px;
  }
`
const CatchPhraseText = styled(Grid)`
  position: relative;
  z-index: 1;
`

const CatchPhraseBackground = styled.div`
  position: absolute;
  width: 100%;
  ${({ theme }) => theme.common.flexCenter}
  svg {
    @media all and (min-width: 1200px) {
      width: 724px;
    }

    @media all and (min-width: 768px) and (max-width: 1199px) {
      width: 500px;
    }

    @media all and (max-width: 767px) {
      width: 300px;
    }
  }
  height: 100%;
`

export default LandingCatchPhrase
