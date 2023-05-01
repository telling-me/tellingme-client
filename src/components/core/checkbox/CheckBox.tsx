import React from 'react'

import { CheckBoxComponent, CheckBoxFrame, CheckBoxMain } from './style'
import type { ICheckBox } from './type'

import style from 'styles/styled-components/styled'
import { Button } from '../button'

const CheckBox = ({
  label,
  labelSize = 'b1',
  mainLabelGap = '10px',
  buttonText,
  mainSize = 'medium',
  _checked,
  _setChecked,
  _disabled = false,
  _onClick,
  _margin
}: ICheckBox) => {
  const handleChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
    _setChecked(e.target.checked)
  }

  return (
    <CheckBoxComponent _disabled={_disabled} _margin={_margin}>
      <CheckBoxFrame mainLabelGap={mainLabelGap}>
        <CheckBoxMain
          type="checkbox"
          checked={_checked}
          mainSize={mainSize}
          onChange={handleChange}
          disabled={_disabled}
        />
        <style.TextSpan typo={labelSize} textColor={_disabled ? 'gray3' : 'black'}>
          {label}
        </style.TextSpan>
      </CheckBoxFrame>

      {buttonText !== undefined && (
        <Button
          buttonType="noFilled"
          contentType="text"
          text={buttonText}
          textSize="c"
          textColor={_disabled ? 'gray3' : 'primary700'}
          _disabled={_disabled}
          _onClick={_onClick}
        />
      )}
    </CheckBoxComponent>
  )
}

export default CheckBox
