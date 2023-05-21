import React from 'react'
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'

import TermsOfService from './TermsOfService'
import ModifyMyInfo from './ModifyMyInfo'
import Withdrawal from './Withdrawal'
import SettingContentHeader from './SettingContentHeader'
import PrivacyPolicy from './PrivacyPolicy'

interface ISettingContent {
  pageNumber: number
  setIsMenu?: Dispatch<SetStateAction<boolean>>
}

const SettingContent = ({ pageNumber, setIsMenu }: ISettingContent) => {
  return (
    <SettingContentWrapper>
      <SettingContentHeader pageNumber={pageNumber} setIsMenu={setIsMenu} />
      {pageNumber === 0 ? (
        <ModifyMyInfo />
      ) : pageNumber === 1 ? (
        <TermsOfService />
      ) : pageNumber === 2 ? (
        <PrivacyPolicy />
      ) : (
        pageNumber === 3 && <Withdrawal />
      )}
    </SettingContentWrapper>
  )
}

const SettingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media all and (min-width: 768px) {
    padding: 0px 60px 42px;
  }

  @media all and (max-width: 767px) {
    padding: 0px 25px 42px;
  }
`

export default SettingContent
