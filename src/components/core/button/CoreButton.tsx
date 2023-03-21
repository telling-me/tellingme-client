import React from 'react'
import { PrimaryButton } from './style'
import { type IButton } from './type'

const CoreButton = ({
  size = 'default',
  _width,
  styleType = 'filled',
  text,
  _margin,
  _disabled = false,
  _onClick,
  _ref,
  isLoading
}: IButton) => {
  return (
    <PrimaryButton
      styleType={styleType}
      _width={_width}
      margin={_margin}
      disabled={_disabled}
      onClick={(e) => {
        if (Boolean(isLoading) || _onClick === undefined) return
        _onClick(e)
      }}
      ref={_ref}
      tabIndex={0}
      isLoading={isLoading}
    >
      <span>{text}</span>
    </PrimaryButton>
  )
}

export default CoreButton
