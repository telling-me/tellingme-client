import React from 'react'

// type
import { type IButton } from './type'

// component
import style from 'styles/styled-components/styled'
import { ButtonComponent } from './style'

const Button = ({
  buttonType = 'primary',
  text,
  textSize,
  textColor,
  textHoverColor,
  _width,
  _height,
  _margin,
  _padding,
  _active,
  _disabled = false,
  _onClick
}: IButton) => {
  return (
    <ButtonComponent
      buttonType={buttonType}
      textHoverColor={textHoverColor}
      _active={_active}
      _width={_width}
      _height={_height}
      _margin={_margin}
      _padding={_padding}
      disabled={_disabled}
      onClick={(e) => {
        if (_onClick === undefined) return
        _onClick(e)
      }}
    >
      <style.TextSpan typo={textSize} textColor={textColor}>
        {text}
      </style.TextSpan>
    </ButtonComponent>
  )
}

export default Button
