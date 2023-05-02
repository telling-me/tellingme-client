import React from 'react'
import Icons from 'assets/icons'

// type
import { type IIcon } from './type'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// component
import styled from 'styled-components'
import { Theme } from 'styles/DefaultTheme'

const Icon = ({ icon, iconSize, iconColor, iconShadow, _margin, _onClick }: IIcon) => {
  const color = iconColor === 'gradient' ? 'url(#gradient)' : useChangeColor(iconColor)
  const size = iconSize === 'small' ? '20px' : iconSize === 'medium' ? '24px' : iconSize === 'large' ? '32px' : '150px'
  const shadow =
    iconShadow === 'shadow1'
      ? Theme.shadow.shadow1
      : iconShadow === 'shadow2'
      ? Theme.shadow.shadow2
      : Theme.shadow.shadow3

  return (
    <IconComponent
      shadow={shadow}
      _margin={_margin}
      onClick={(e) => {
        if (_onClick !== undefined) _onClick(e)
      }}
    >
      {icon === 'warning' ? (
        <Icons.Warning width={size} height={size} stroke={color} />
      ) : icon === 'xcircle' ? (
        <Icons.XCircle width={size} height={size} stroke={color} />
      ) : icon === 'heart' ? (
        <Icons.Heart width={size} height={size} stroke={color} />
      ) : icon === 'check' ? (
        <Icons.Check width={size} height={size} stroke={color} />
      ) : icon === 'arrowleft' ? (
        <Icons.ArrowLeft width={size} height={size} stroke={color} />
      ) : icon === 'arrowright' ? (
        <Icons.ArrowRight width={size} height={size} stroke={color} />
      ) : icon === 'male' ? (
        <Icons.Male width={size} height={size} stroke={color} />
      ) : icon === 'female' ? (
        <Icons.Female width={size} height={size} stroke={color} />
      ) : icon === 'bellringing' ? (
        <Icons.BellRinging width={size} height={size} fill={color} />
      ) : icon === 'caretup' ? (
        <Icons.CaretUp width={size} height={size} stroke={color} />
      ) : icon === 'caretdown' ? (
        <Icons.CaretDown width={size} height={size} stroke={color} />
      ) : icon === 'graduationcap' ? (
        <Icons.GraduationCap width={size} height={size} stroke={color} />
      ) : icon === 'handshake' ? (
        <Icons.Handshake width={size} height={size} stroke={color} />
      ) : icon === 'health' ? (
        <Icons.Health width={size} height={size} stroke={color} />
      ) : icon === 'values' ? (
        <Icons.Values width={size} height={size} stroke={color} />
      ) : icon === 'magnet' ? (
        <Icons.Magnet width={size} height={size} stroke={color} />
      ) : icon === 'pen' ? (
        <Icons.Pen width={size} height={size} stroke={color} />
      ) : icon === 'bagpack' ? (
        <Icons.Bagpack width={size} height={size} fill={color} />
      ) : icon === 'briefcase' ? (
        <Icons.Briefcase width={size} height={size} fill={color} />
      ) : icon === 'cookpot' ? (
        <Icons.Cookpot width={size} height={size} fill={color} />
      ) : icon === 'smiley' ? (
        <Icons.Smiley width={size} height={size} fill={color} />
      ) : icon === 'close' ? (
        <Icons.Close width={size} height={size} stroke={color} />
      ) : icon === 'bubble' ? (
        <Icons.Bubble width={size} height={size} stroke={color} />
      ) : icon === 'setting' ? (
        <Icons.Setting width={size} height={size} stroke={color} />
      ) : icon === 'rows' ? (
        <Icons.Rows width={size} height={size} stroke={color} />
      ) : (
        icon === 'columns' && <Icons.Columns width={size} height={size} stroke={color} />
      )}
    </IconComponent>
  )
}

const IconComponent = styled.div<{ shadow?: string; _margin?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;

  margin: ${({ _margin }) => _margin != null && _margin};
  filter: drop-shadow(${({ shadow }) => shadow != null && shadow});
`

export default Icon
