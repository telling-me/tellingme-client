import React from 'react'

// components
import Icon from 'assets/icons'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

const LandingFooter = () => {
  const theme = useTheme()
  return (
    <FooterWrapper>
      <FooterInnerWrapper flex="between" direction="column" _height="100%">
        <Grid flex="between">
          <Icon.Logo width={69} fill={theme.colors.side.side500} />
          <Grid flex="end" _gap="20px">
            <TextP typo="c_b" textColor="side500">
              서비스 소개
            </TextP>
            <TextP typo="c_b" textColor="side500">
              이용약관
            </TextP>
            <TextP typo="c_b" textColor="side500">
              개인정보처리방침
            </TextP>
          </Grid>
        </Grid>
        <Grid flex="between">
          <Grid flex="start" direction="column" _gap="4px">
            <Grid flex="start" _gap="8px">
              <TextP typo="c_b" textColor="side500">
                주소 06974, 동작구 흑석로 84 221호
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
                이메일 tellingmetime@gmail.com
              </TextP>
            </Grid>
          </Grid>
          <Grid flex="end" _width="fit-content">
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

  @media all and (max-width: 767px) {
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

export default LandingFooter
