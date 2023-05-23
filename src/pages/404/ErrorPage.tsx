import React from 'react'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <style.TextH1 typo="h1_b" textColor="logo">
        404 Error
      </style.TextH1>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 100%;
  height: 100%;
`

export default ErrorPage
