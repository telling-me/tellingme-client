import style from 'styles/styled-components/styled'
import React from 'react'
import { CheckBoxButton, CheckBoxComponent } from './style'
import type { ICheckBox } from './type'
import CheckSquare from './CheckSquare'

const CheckBox = ({
  _checked,
  setChecked,
  label,
  buttonText,
  buttonOnClick,
  checkSize = 'large',
  _margin,
  _maxWidth,
  _disabled = false
}: ICheckBox) => {
  return (
    <CheckBoxComponent checkSize={checkSize} _margin={_margin} _maxWidth={_maxWidth} _disabled={_disabled}>
      <CheckSquare _checked={_checked} setChecked={setChecked} checkSize={checkSize} _disabled={_disabled} />

      <style.TextP
        typo={checkSize === 'small' ? 'c' : 'b1'}
        textColor={_disabled ? 'gray3' : 'black'}
        _margin="0px 0px 0px 10px"
      >
        {label}
      </style.TextP>

      <CheckBoxButton onClick={buttonOnClick} disabled={_disabled}>
        {buttonText}
      </CheckBoxButton>
    </CheckBoxComponent>
  )
}

export default CheckBox
