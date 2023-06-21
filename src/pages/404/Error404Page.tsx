import React from 'react'
import { useNavigate } from 'react-router-dom'

// components
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { Button } from 'components'

// assets
import Icon from 'assets/icons'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <NoneDataWrapper flex="center" direction="column" _gap="8px">
      <Icon.NotFound width={140} />

      <Grid flex="center" direction="column">
        <TextP typo="h2" textColor="logo" _margin="8px 0 20px">
          404
        </TextP>

        <TextP typo="h6_b" textColor="gray8" _margin="0 0 12px 0">
          원하시는 페이지를 찾을 수 없어요.
        </TextP>

        <TextP typo="b2" textColor="gray8">
          주소를 다시 한번 확인 해주세요.
        </TextP>

        <Grid flex="center" wrap="wrap">
          <TextP typo="b2" textColor="gray8" _margin="8px 0">
            방문하시려는 페이지가 잘못 입력되었거나,&nbsp;
          </TextP>
          <TextP typo="b2" textColor="gray8">
            변경 또는 삭제되어 이용하실 수 없습니다.
          </TextP>
        </Grid>

        <Button
          buttonType="secondary"
          text="홈으로 갈래요"
          _margin="24px 0 0 0"
          _padding="18px 32px"
          textSize="h6"
          textColor="logo"
          _onClick={() => {
            navigate('/app/main')
          }}
        />
      </Grid>
    </NoneDataWrapper>
  )
}
const { Grid, TextP } = style

const NoneDataWrapper = styled(Grid)`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`

export default ErrorPage
