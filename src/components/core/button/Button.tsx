import React from 'react'

import { ButtonComponent, BothFrame, WithInput, WithInputFrame } from './style'

// type
import { type IconType, type ColorType } from 'type/common'
import { type IconSizeType } from '../icon/type'
import { type IButton } from './type'

// component
import { Icon } from 'components'
import style from 'styles/styled-components/styled'

const Button = ({
  buttonType = 'primary',
  contentType,
  text,
  textSize,
  textColor,
  textHoverColor,
  icon,
  iconSize,
  iconColor,
  jobInfo,
  setJobInfo,
  _active,
  _width,
  _height,
  _margin,
  _padding,
  _gap,
  _justifyContent = 'center',
  _disabled = false,
  _onClick,
  _ref
}: IButton) => {
  const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    if (setJobInfo !== undefined) {
      setJobInfo(e.target.value)
    }
  }

  return (
    <ButtonComponent
      buttonType={buttonType}
      textHoverColor={textHoverColor}
      _active={_active}
      _width={_width}
      _height={_height}
      _margin={_margin}
      _padding={_padding}
      _justifyContent={_justifyContent}
      disabled={_disabled}
      onClick={(e) => {
        if (_onClick === undefined) return
        _onClick(e)
      }}
      ref={_ref}
    >
      {contentType === 'text' ? (
        <style.TextSpan textSize={textSize} textColor={textColor}>
          {text}
        </style.TextSpan>
      ) : contentType === 'icon' ? (
        <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
      ) : contentType === 'row' || contentType === 'col' ? (
        <BothFrame contentType={contentType} _gap={_gap as string}>
          <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
          <style.TextSpan textSize={textSize} textColor={textColor}>
            {text}
          </style.TextSpan>
        </BothFrame>
      ) : (
        <WithInputFrame>
          <BothFrame contentType="row" _gap={_gap as string}>
            <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
            <style.TextSpan textSize={textSize} textColor={textColor}>
              {text}
            </style.TextSpan>
          </BothFrame>

          <WithInput placeholder="직접 입력..." value={jobInfo} onChange={handleChange} _active={_active} />
        </WithInputFrame>
      )}
    </ButtonComponent>
  )
}

export default Button
