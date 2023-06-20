import React, { useState } from 'react'

// components
import { ToolTip } from 'components'

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
        <style.TextSpan typo="h6" textColor="black" _margin="0 0 0 10px">
          {label}
        </style.TextSpan>
      )}

      <InputOuterFrame2 isVisible={isVisible} _value={_value}>
        <InputInnerFrame
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
          <ToolTip
            tooltipType={'topRight'}
            tooltipText={errorText as string}
            childrenWidth={24}
            _margin="0 30px 0 auto"
          >
            <Icons.Warning width="24" height="24" stroke={useChangeColor('error400')} />
          </ToolTip>
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
        <style.TextSpan typo="c" textColor={_disabled ? 'gray5' : 'gray7'} _margin="0 0 0 10px">
          {infoText}
        </style.TextSpan>
      )}
      {isError && errorText != null && (
        <style.TextSpan typo="c" textColor="error500" _margin="0 0 0 10px">
          {errorText}
        </style.TextSpan>
      )}
    </InputComponent>
  )
}

export default Input
