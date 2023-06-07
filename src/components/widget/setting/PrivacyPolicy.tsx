import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// data
import { SETTING_PRIVACY_POLICY_DOCS, SETTING_PRIVACY_POLICY_TEXTP_INFO } from 'data/docs'
import type { TextSizeType } from 'type/common'

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyWrapper>
      {SETTING_PRIVACY_POLICY_DOCS.map((v, i) => {
        return (
          <style.TextP
            key={i}
            typo={SETTING_PRIVACY_POLICY_TEXTP_INFO[i]._typo as TextSizeType}
            textColor="black"
            _width="100%"
            _margin={SETTING_PRIVACY_POLICY_TEXTP_INFO[i]._margin}
          >
            {v}
          </style.TextP>
        )
      })}
    </PrivacyPolicyWrapper>
  )
}

const PrivacyPolicyWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}
  flex-direction: column;

  width: 100%;
  max-width: 425px;
  margin-top: 20px;

  p {
    white-space: pre-wrap;
    line-height: 24px;
  }

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`

export default PrivacyPolicy
