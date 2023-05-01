import React from 'react'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <style.TextP>Its Footer</style.TextP>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  height: 50px;
  width: 100%;
`

export default Footer
