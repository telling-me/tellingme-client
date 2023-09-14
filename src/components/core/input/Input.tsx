import React, { useState } from 'react'

// styles
import style from 'styles/styled-components/styled'
import { InputComponent, InputInnerFrame, InputOuterFrame2 } from './style'

// type
import type { IInput } from './type'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'

const Input = ({
  _placeholder,
  _type,
  _value,
  setValue,
  label,
  infoText,
  errorText,
  isError = false,
  setIsError,
  _disabled = false,
  _margin,
  _width = '100%',
  _maxWidth
}: IInput) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setValue(e.target.value)

    if (setIsError != null && isError) {
      setIsError(false)
    }
  }

  const handleReset = () => {
    setValue('')
  }

  return (
    <InputComponent _margin={_margin} _width={_width} _maxWidth={_maxWidth}>
      {label != null && (
        <TextSpan typo="h6" textColor="black" _margin="0 0 0 10px">
          {label}
        </TextSpan>
      )}

      <InputOuterFrame2 isVisible={isVisible} _value={_value} _disabled={_disabled}>
        <InputInnerFrame
          type={_type}
          placeholder={_placeholder}
          value={_value}
          onChange={handleChange}
          isError={isError}
          disabled={_disabled}
          onFocus={() => {
            setIsVisible(true)
          }}
          onBlur={() => {
            setIsVisible(false)
          }}
        />

        {isError ? (
          <Icons.Warning
            width="24"
            height="24"
            stroke={useChangeColor('error400')}
            style={{ margin: '0 30px 0 auto' }}
          />
        ) : (
          <Icons.XCircle
            width="24"
            height="24"
            stroke={useChangeColor('side500')}
            style={{ margin: '0 30px 0 auto' }}
            onClick={() => {
              handleReset()
            }}
          />
        )}
      </InputOuterFrame2>

      {!isError && infoText != null && (
        <TextSpan typo="c" textColor={_disabled ? 'gray5' : 'gray7'} _margin="0 0 0 10px">
          {infoText}
        </TextSpan>
      )}
      {isError && errorText != null && (
        <TextSpan typo="c" textColor="error500" _margin="0 0 0 10px">
          {errorText}
        </TextSpan>
      )}
    </InputComponent>
  )
}

const { TextSpan } = style

export default Input
