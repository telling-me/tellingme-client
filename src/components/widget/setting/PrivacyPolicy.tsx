import React from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'

// data
import { SETTING_PRIVACY_POLICY_DOCS } from 'data/docs'
import type { TextSizeType } from 'type/common'

const PrivacyPolicy = () => {
  const textPInfo = [
    {
      _typo: 'b2_b',
      _margin: '0 0 12px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0 0 32px 0'
    },
    {
      _typo: 'b2_b',
      _margin: '0 0 16px 0'
    },
    {
      _typo: 'b2',
      _margin: '0'
    }
  ]

  return (
    <PrivacyPolicyWrapper>
      {SETTING_PRIVACY_POLICY_DOCS.map((v, i) => {
        return (
          <style.TextP
            key={i}
            typo={textPInfo[i]._typo as TextSizeType}
            textColor="black"
            _width="100%"
            _margin={textPInfo[i]._margin}
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
