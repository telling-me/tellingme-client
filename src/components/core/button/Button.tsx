import React from 'react'

import { ButtonComponent, ButtonContent, BothFrame } from './style'

// type
import { type IconType, type ColorType, type TextSizeType } from 'type/common'
import { type IconSizeType } from '../icon/type'
import { type IButton } from './type'

// component
import { Icon } from 'components'

const Button = ({
  buttonType = 'primary',
  contentType,
  text,
  textSize,
  textColor,
  icon,
  iconSize,
  iconColor,
  _margin,
  _padding,
  _gap,
  _disabled = false,
  _onClick,
  _ref
}: IButton) => {
  return (
    <ButtonComponent
      buttonType={buttonType}
      _margin={_margin as string}
      disabled={_disabled}
      onClick={(e) => {
        if (_onClick === undefined) return
        _onClick(e)
      }}
      ref={_ref}
    >
      <ButtonContent textSize={textSize as TextSizeType} textColor={textColor as string} _padding={_padding as string}>
        {contentType === 'text' ? (
          <span>{text}</span>
        ) : contentType === 'icon' ? (
          <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
        ) : (
          <BothFrame contentType={contentType} _gap={_gap as string}>
            <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
            <span>{text}</span>
          </BothFrame>
        )}
      </ButtonContent>
    </ButtonComponent>
  )
}

export default Button
