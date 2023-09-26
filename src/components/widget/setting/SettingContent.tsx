import React from 'react'

// component
import styled from 'styled-components'

import ModifyMyInfo from './ModifyMyInfo'
import Withdrawal from './Withdrawal'
import SettingContentHeader from './SettingContentHeader'

interface ISettingContent {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
  setIsMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingContent = ({ pageNumber, setPageNumber, setIsMenu }: ISettingContent) => {
  return (
    <SettingContentWrapper>
      {pageNumber !== 0 && (
        <SettingContentHeader pageNumber={pageNumber} setPageNumber={setPageNumber} setIsMenu={setIsMenu} />
      )}

      {pageNumber === 0 ? (
        <ModifyMyInfo setPageNumber={setPageNumber} setIsMenu={setIsMenu} />
      ) : (
        pageNumber === 4 && <Withdrawal />
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
