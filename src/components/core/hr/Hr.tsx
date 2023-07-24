import React from 'react'
import styled from 'styled-components'

interface IHr {
  _margin?: string
  _maxWidth?: string
}

const Hr = ({ _margin, _maxWidth }: IHr) => {
  return <HrComponent _margin={_margin} _maxWidth={_maxWidth} />
}

const HrComponent = styled.div<{ _margin?: string; _maxWidth?: string }>`
  width: 100%;
  max-width: 425px;
  height: 0px;

  border: 1px solid #e6e4e2;
  border-radius: 8px;

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
  ${({ _maxWidth }) => _maxWidth != null && `max-width: ${_maxWidth};`}
`

export default Hr
