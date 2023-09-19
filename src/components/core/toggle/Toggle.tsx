/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React from 'react'
import type { IToggle } from './type'
import { ToggleComponent, ToggleWrapper, ToggleCircle } from './style'
import style from 'styles/styled-components/styled'

const Toggle = ({
  label,
  value,
  leftColor = 'side400',
  rightColor = 'logo',
  _disabled = false,
  _margin,
  setValue,
  _onClick = () => {}
}: IToggle) => {
  return (
    <ToggleComponent
      onClick={() => {
        if (!_disabled) {
          setValue(!value)
        } else {
          _onClick()
        }
      }}
      _margin={_margin}
    >
      {label && Array.isArray(label) && !value && (
        <TextSpan typo="c" textColor="gray8">
          {label[0]}
        </TextSpan>
      )}
      {label && Array.isArray(label) && value && (
        <TextSpan typo="c" textColor="gray8">
          {label[1]}
        </TextSpan>
      )}
      {label && !Array.isArray(label) && (
        <TextSpan typo="c" textColor="gray8">
          {label}
        </TextSpan>
      )}
      <ToggleWrapper checked={value}>
        <ToggleCircle />
      </ToggleWrapper>
    </ToggleComponent>
  )
}

const { TextSpan } = style

export default Toggle
