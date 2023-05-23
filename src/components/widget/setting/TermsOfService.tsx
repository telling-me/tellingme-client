import { SETTING_TERMS_OF_SERVICE_DOCS } from 'data/docs'
import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

const TermsOfService = () => {
  return (
    <TermsOfServiceWrapper>
      <style.TextP typo="b2" textColor="black">
        {SETTING_TERMS_OF_SERVICE_DOCS}
      </style.TextP>
    </TermsOfServiceWrapper>
  )
}

const TermsOfServiceWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
  max-width: 425px;
  margin-top: 20px;

  p {
    white-space: pre-wrap;
    line-height: 24px;

    // max-width: 425px;
  }
`

export default TermsOfService
