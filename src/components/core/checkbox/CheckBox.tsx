import React from 'react'

import { CheckBoxButton, CheckBoxComponent, CheckBoxFrame, CheckBoxMain } from './style'
import type { ICheckBox } from './type'

import style from 'styles/styled-components/styled'

const CheckBox = ({ label, buttonText, _checked, _setChecked, _disabled = false, _onClick }: ICheckBox) => {
  const handleChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    _setChecked(e.target.checked)

    console.log(e.target.checked)
  }

  return (
    <CheckBoxComponent _disabled={_disabled}>
      <CheckBoxFrame>
        <CheckBoxMain type="checkbox" checked={_checked} onChange={handleChange} disabled={_disabled} />
        <style.TextSpan textSize="b1" textColor={_disabled ? 'gray3' : 'black'}>
          {label}
        </style.TextSpan>
      </CheckBoxFrame>

      <CheckBoxButton onClick={_onClick} disabled={_disabled}>
        <style.TextSpan textSize="c" textColor={_disabled ? 'gray3' : 'primary700'}>
          {buttonText}
        </style.TextSpan>
      </CheckBoxButton>
    </CheckBoxComponent>
  )
}

export default CheckBox
