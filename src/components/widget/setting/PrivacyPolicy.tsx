import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// data
import { SETTING_PRIVACY_POLICY_DOCS } from 'data/docs'

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyWrapper>
      <style.TextP typo="b2" textColor="black">
        {SETTING_PRIVACY_POLICY_DOCS}
      </style.TextP>
    </PrivacyPolicyWrapper>
  )
}

const PrivacyPolicyWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}

  width: 100%;
  max-width: 425px;
  margin-top: 20px;

  p {
    white-space: pre-wrap;
    line-height: 24px;
  }
`

export default PrivacyPolicy
