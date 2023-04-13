import React from 'react'

import { ButtonComponent, ButtonContent, BothFrame, WithInput, WithInputFrame } from './style'

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
      _active={_active}
      _width={_width}
      _height={_height}
      _margin={_margin as string}
      _justifyContent={_justifyContent}
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
        ) : contentType === 'row' || contentType === 'col' ? (
          <BothFrame contentType={contentType} _gap={_gap as string}>
            <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
            <span>{text}</span>
          </BothFrame>
        ) : (
          <WithInputFrame>
            <BothFrame contentType="row" _gap={_gap as string}>
              <Icon icon={icon as IconType} iconSize={iconSize as IconSizeType} iconColor={iconColor as ColorType} />
              <span>{text}</span>
            </BothFrame>

            <WithInput placeholder="직접 입력..." value={jobInfo} onChange={handleChange} _active={_active} />
          </WithInputFrame>
        )}
      </ButtonContent>
    </ButtonComponent>
  )
}

export default Button
