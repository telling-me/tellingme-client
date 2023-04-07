import React from 'react'
import Icons from 'assets/icons'

// type
import { type IIcon } from './type'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// component
import styled from 'styled-components'

const Icon = ({ icon, iconSize, iconColor, _onClick }: IIcon) => {
  const color = useChangeColor(iconColor)
  const size = iconSize === 'small' ? '20px' : iconSize === 'medium' ? '24px' : '32px'

  return (
    <IconComponent
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
        <Icons.BellRinging width={size} height={size} stroke={color} />
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
      ) : (
        <></>
      )}
    </IconComponent>
  )
}

const IconComponent = styled.div``

export default Icon
