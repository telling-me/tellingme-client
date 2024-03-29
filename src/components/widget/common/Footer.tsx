import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import Icon from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

// hooks
import useWindowSize from 'hooks/useWindowSize'

// utils
import { mediaQuery } from 'utils/mediaQuery'
import { Button } from 'components/core'

const Footer = () => {
  const theme = useTheme()
  const windowSize = useWindowSize()
  const navigate = useNavigate()
  return (
    <FooterWrapper>
      <FooterInnerWrapper flex="between" direction="column" _height="100%">
        <Grid
          flex="between"
          _alignItems={mediaQuery(windowSize.width) === 'mobile' ? 'start' : 'center'}
          direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
          _gap="24px"
        >
          <Icon.Logo width={69} fill={theme.colors.side.side500} />
          <Grid flex={mediaQuery(windowSize.width) === 'mobile' ? 'start' : 'end'} wrap="wrap" _gap="8px 20px">
            <Button
              buttonType="noFilled"
              text="텔링미 소식 구독"
              textSize="c_b"
              textColor="side500"
              _onClick={() => {
                navigate('/newsletter')
              }}
            />
            <Button
              buttonType="noFilled"
              text="서비스 소개"
              textSize="c_b"
              textColor="side500"
              _onClick={() => {
                window.open(process.env.REACT_APP_TELLINGME_SERVICE_INTRODUCTION)
              }}
            />
            <Button
              buttonType="noFilled"
              text="이용약관"
              textSize="c_b"
              textColor="side500"
              _onClick={() => {
                window.open(process.env.REACT_APP_TELLINGME_TERMS_OF_USE)
              }}
            />
            <Button
              buttonType="noFilled"
              text="개인정보처리방침"
              textSize="c_b"
              textColor="side500"
              _onClick={() => {
                window.open(process.env.REACT_APP_TELLINGME_PRIVACY_POLICY)
              }}
            />
          </Grid>
        </Grid>
        <Grid
          flex="between"
          _alignItems={mediaQuery(windowSize.width) === 'mobile' ? 'start' : 'center'}
          direction={mediaQuery(windowSize.width) === 'mobile' ? 'column' : 'row'}
          _gap="24px"
        >
          <Grid flex="start" direction="column" _gap="4px">
            <Grid flex="start" _gap="8px">
              <TextP typo="c_b" textColor="side500">
                사업자등록번호 187-26-01892
              </TextP>
              <TextP typo="c_b" textColor="side500">
                |
              </TextP>
              <TextP typo="c_b" textColor="side500">
                대표 박소현
              </TextP>
            </Grid>
            <Grid>
              <TextP typo="c_b" textColor="side500">
                주소 06974, 동작구 흑석로 84 221호
              </TextP>
            </Grid>
            <Grid>
              <TextP typo="c_b" textColor="side500">
                이메일 tellingmetime@gmail.com
              </TextP>
            </Grid>
          </Grid>
          <Grid flex="end" _gap="16px" _width="fit-content">
            <InstaButtonWrapper onClick={() => window.open(process.env.REACT_APP_TELLINGME_MEDIUM_URL)}>
              <Icon.Medium width={20} />
            </InstaButtonWrapper>
            <InstaButtonWrapper onClick={() => window.open(process.env.REACT_APP_TELLINGME_INSTAGRAM_URL)}>
              <Icon.Insta width={12} />
            </InstaButtonWrapper>
          </Grid>
        </Grid>
      </FooterInnerWrapper>
    </FooterWrapper>
  )
}

const { Grid, TextP } = style

const FooterWrapper = styled.div`
  height: 146px;
  padding: 25px 60px;
  background-color: ${({ theme }) => theme.colors.side.side200};
  scroll-snap-align: start;
  ${({ theme }) => theme.common.flexCenter}

  @media all and (max-width: 767px) {
    height: 247px;
    padding: 25px;
  }
`

const FooterInnerWrapper = styled(Grid)`
  max-width: 1400px;
`

const InstaButtonWrapper = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.side.side300};
  border-radius: 100%;
  ${({ theme }) => theme.common.flexCenter}
`

export default Footer
