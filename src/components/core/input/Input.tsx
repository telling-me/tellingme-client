/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React from 'react'
import { InputComponent, InputInnerFrame, InputOuterFrame, InputSpan } from './style'
import type { IInput } from './type'

import { Icon } from 'components'

const Input = ({
  label,
  infoText,
  errorText,
  isError = false,
  _disabled = false,
  _placeholder = '',
  _value,
  _margin = '0px',
  _setValue
}: IInput) => {
  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    _setValue(e.target.value)
  }

  const resetInput = () => {
    _setValue('')
  }

  return (
    <InputComponent _margin={_margin}>
      {label !== undefined && (
        <InputSpan textSize="h6" textColor="black">
          {label}
        </InputSpan>
      )}

      <InputOuterFrame isError={isError} _disabled={_disabled}>
        <InputInnerFrame
          value={_value}
          placeholder={_placeholder}
          disabled={_disabled}
          onChange={handleChange}
          isError={isError}
          _disabled={_disabled}
        />

        {_disabled ? (
          <Icon icon="xcircle" iconSize="medium" iconColor="side200" />
        ) : isError ? (
          <Icon icon="warning" iconSize="medium" iconColor="error400" />
        ) : _value.length > 0 ? (
          <Icon icon="xcircle" iconSize="medium" iconColor="side500" _onClick={resetInput} />
        ) : (
          <Icon icon="xcircle" iconSize="medium" iconColor="side200" />
        )}
      </InputOuterFrame>

      {!isError && infoText !== undefined && !_disabled && (
        <InputSpan textSize="c" textColor="gray7">
          {infoText}
        </InputSpan>
      )}
      {isError && errorText !== undefined && !_disabled && (
        <InputSpan textSize="c" textColor="error500">
          {errorText}
        </InputSpan>
      )}
    </InputComponent>
  )
}

export default Input
