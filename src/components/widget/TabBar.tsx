import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// components
import style from 'styles/styled-components/styled'

const TabBar = () => {
  return (
    <TabBarWrapper>
      <li>
        <ul>
          <Link to="/app/allanswer">
            <style.TextSpan>ALL</style.TextSpan>
          </Link>
        </ul>
        <ul>
          <Link to="/app/main">
            <style.TextSpan>HOME</style.TextSpan>
          </Link>
        </ul>
        <ul>
          <Link to="/app/myanswer">
            <style.TextSpan>MY</style.TextSpan>
          </Link>
        </ul>
      </li>
    </TabBarWrapper>
  )
}

const TabBarWrapper = styled.nav`
  position: absolute;
  z-index: 6000;
  right: 30px;
  top: 50%;
`
export default TabBar
