import React from 'react'

import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const ServiceInfo = () => {
  return (
    <ServiceInfoWrapper>
      <FirstLine>
        <style.TextP typo="c_b" textColor="side500">
          고객센터 e-mail
        </style.TextP>
      </FirstLine>
    </ServiceInfoWrapper>
  )
}

const ServiceInfoWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-direction: column;
`

const FirstLine = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  flex-wrap: wrap;
`

export default ServiceInfo
