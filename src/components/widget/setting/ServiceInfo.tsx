import React from 'react'

import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const ServiceInfo = () => {
  return (
    <ServiceInfoWrapper>
      <FirstLine>
        <TextP typo="c_b" textColor="side500">
          고객센터 e-mail
        </TextP>

        <TextP typo="b2_b" textColor="side500">
          tellingmetime@gmail.com
        </TextP>
      </FirstLine>

      <SecondLine>
        <TextP typo="c_b" textColor="side500">
          문의, 버그 신고, 제안 등 다양한 의견을
        </TextP>
        <TextP typo="c_b" textColor="side500">
          이 이메일 주소로 보내주세요!
        </TextP>
      </SecondLine>
    </ServiceInfoWrapper>
  )
}

const { TextP } = style

const ServiceInfoWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  gap: 10px;

  margin: auto 0 56px 0;

  @media all and (max-width: 767px) {
    background-color: ${({ theme }) => theme.colors.side.side200};
    border-radius: 12px;

    padding: 12px 21px;
  }
`

const FirstLine = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-wrap: wrap;
  gap: 10px;

  @media all and (min-width: 767px) {
    margin-top: 20px;
  }

  p:nth-child(1) {
    border: 1px solid #807f7d;
    border-radius: 200px;

    padding: 4px 8px;
  }
`

const SecondLine = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
  gap: 4px;
`

export default ServiceInfo
