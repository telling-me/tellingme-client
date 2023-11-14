import React from 'react'
import tellingme_plus from 'assets/images/tellingme_plus.png'
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import Icon from 'assets/icons'
import { IconButton } from 'components/core'
import useChangeColor from 'hooks/useChangeColor'
import { useNavigate } from 'react-router-dom'

const PremiumPage = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Header>
        <Grid>
          <IconButton
            buttonType="noFilled"
            _width="fit-content"
            _height="fit-content"
            _onClick={() => {
              navigate(-1)
            }}
          >
            <Icon.ArrowLeft width="24" height="24" stroke={useChangeColor('gray6')} />
          </IconButton>
        </Grid>

        <Grid flex="center">
          <TextP typo="h6_b" textColor="gray6">
            텔링e북
          </TextP>
        </Grid>
        <Grid />
      </Header>
      <ImgWrapper>
        <img src={tellingme_plus} width={'100%'} alt="tellingme_plus"></img>
      </ImgWrapper>
    </Wrapper>
  )
}

const { Grid, TextP } = style

const Header = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 20px 25px 14px 21px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 0;
  }
`

const ImgWrapper = styled.div`
  width: 100%;
`

export default PremiumPage
