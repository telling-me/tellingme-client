import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// data
import { PRIVACY_POLICY_DOCS } from 'data/docs'

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyWrapper>
      {PRIVACY_POLICY_DOCS.map((v, i) => {
        return (
          <style.TextP key={i} typo={v._typo} textColor="black" _width="100%" _margin={v._margin}>
            {v.content}
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
    display: none;
    width: 0;
  }
`

export default PrivacyPolicy
