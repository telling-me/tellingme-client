import React from 'react'
import { useNavigate } from 'react-router-dom'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { IconButton } from 'components'

// assets
import Icons from 'assets/icons'

// hooks
import useChangeColor from 'hooks/useChangeColor'

const SettingHeader = () => {
  const navigate = useNavigate()
  return (
    <SettingHeaderWrapper>
      <IconButton
        buttonType="noFilled"
        _width="fit-content"
        _height="fit-content"
        _onClick={() => {
          navigate('/app/main')
        }}
      >
        <Icons.ArrowLeft width="24" height="24" stroke={useChangeColor('gray6')} />
      </IconButton>

      <style.TextP typo="h6_b" textColor="gray6" _margin="0 auto">
        설정
      </style.TextP>
    </SettingHeaderWrapper>
  )
}

const SettingHeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 66px;

  background-color: ${({ theme }) => theme.colors.side.side100};

  @media all and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0px 14px 0px;
  }

  @media all and (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 60px 14px 60px;
  }

  @media all and (max-width: 767px) {
    padding: 20px 25px 14px 21px;
  }

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default SettingHeader
