import React, { useState } from 'react'
import { InputComponent, InputInnerFrame, InputOuterFrame, InputSpan } from './style'
import type { IInput } from './type'

import { Icon } from 'components'

const Input = ({
  label,
  infoText,
  errorText,
  isError = false,
  setIsError,
  _width,
  _disabled = false,
  _placeholder = '',
  _value,
  _margin = '0px',
  _setValue
}: IInput) => {
  const [hasXCircle, setHasXCircle] = useState(false)

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    _setValue(e.target.value)

    if (setIsError !== undefined) {
      setIsError(false)
    }
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

      <InputOuterFrame _width={_width} isError={isError} _disabled={_disabled}>
        <InputInnerFrame
          value={_value}
          placeholder={_placeholder}
          disabled={_disabled}
          onChange={handleChange}
          onFocus={() => {
            setHasXCircle(true)
          }}
          onBlur={() => {
            setHasXCircle(false)
          }}
          isError={isError}
          _disabled={_disabled}
        />

        <Icon
          icon="xcircle"
          iconSize="medium"
          iconColor={
            _disabled ? 'gray1' : isError ? 'error400' : hasXCircle && _value.length > 0 ? 'side500' : 'side200'
          }
          _onClick={() => {
            if (!_disabled && !isError) {
              resetInput()
            }
          }}
        />
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
