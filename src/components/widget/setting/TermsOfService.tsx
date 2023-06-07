import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// data
import { SETTING_TERMS_OF_SERVICE_DOCS, SETTING_TERMS_OF_SERVICE_TEXTP_INFO } from 'data/docs'

// type
import type { TextSizeType } from 'type/common'

const TermsOfService = () => {
  return (
    <TermsOfServiceWrapper>
      {SETTING_TERMS_OF_SERVICE_DOCS.map((v, i) => {
        return (
          <style.TextP
            key={i}
            typo={SETTING_TERMS_OF_SERVICE_TEXTP_INFO[i]._typo as TextSizeType}
            textColor="black"
            _width="100%"
            _margin={SETTING_TERMS_OF_SERVICE_TEXTP_INFO[i]._margin}
          >
            {v}
          </style.TextP>
        )
      })}
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
