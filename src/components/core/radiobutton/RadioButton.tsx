import React from 'react'
import type { IRadioButton } from './type'
import { RadioButtonComponent, RadioButtonMain, RadioButtonWrapper } from './style'
import style from 'styles/styled-components/styled'

const RadioButton = ({
  options,
  mainSize = 'medium',
  labelSize = 'b1',
  labelMainGap = '10px',
  wrapperGap = '10px',
  _margin,
  _value,
  _setValue
}: IRadioButton) => {
  const handleClick = (value: string) => {
    _setValue(value)
  }

  return (
    <RadioButtonComponent wrapperGap={wrapperGap} _margin={_margin}>
      {options.map((option, i) => {
        return (
          <RadioButtonWrapper key={i} labelMainGap={labelMainGap}>
            <RadioButtonMain
              mainSize={mainSize}
              checked={_value === option.value}
              onClick={() => {
                handleClick(option.value)
              }}
            />

            <TextSpan typo={labelSize}>{option.label}</TextSpan>
          </RadioButtonWrapper>
        )
      })}
    </RadioButtonComponent>
  )
}

const { TextSpan } = style

export default RadioButton
