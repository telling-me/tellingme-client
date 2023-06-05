import React from 'react'
import { useNavigate } from 'react-router-dom'

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
      <Grid flex="center" direction="column" _gap="24px">
        <TextP typo="h2" textColor="logo"></TextP>
        404
        <TextP typo="h6" textColor="gray8"></TextP>
        원하시는 페이지를 찾을 수 없어요.
        <TextP typo="b2" textColor="gray8">
          주소를 다시 한번 확인 해주세요.
        </TextP>
        <TextP typo="b2" textColor="gray8">
          방문하시려는 페이지가 잘못 입력되었거나,
        </TextP>
        <TextP typo="b2" textColor="gray8">
          변경 또는 삭제되어 이용하실 수 없습니다.
        </TextP>
        <Button
          buttonType="secondary"
          text="홈으로 갈래요"
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

const NoneDataWrapper = styled(Grid)``

export default ErrorPage
