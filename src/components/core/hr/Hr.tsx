import React from 'react'
import styled from 'styled-components'

interface IHr {
  _margin?: string
}

const Hr = ({ _margin }: IHr) => {
  return <HrComponent _margin={_margin} />
}

const HrComponent = styled.div<{ _margin?: string }>`
  width: 100%;
  max-width: 425px;
  height: 0px;

  border: 1px solid #e6e4e2;
  border-radius: 8px;

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
`

export default Hr
