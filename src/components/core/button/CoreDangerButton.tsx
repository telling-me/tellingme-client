import React from 'react'
import { DangerButton } from './style'
import { type IDangerButton } from './type'

const CoreDangerButton = ({
  text,
  _disabled = false,
  _onClick,
  _ref,
  isLoading
}: IDangerButton) => {
  return (
    <DangerButton
      disabled={_disabled}
      onClick={(e) => {
        if (isLoading === true || _onClick === undefined) return
        _onClick(e)
      }}
      ref={_ref}
      isLoading={isLoading}
    >
      <span>{text}</span>
    </DangerButton>
  )
}

export default CoreDangerButton
