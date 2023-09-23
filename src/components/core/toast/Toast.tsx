import React from 'react'
import { ToastComponent } from './style'
import type { IToast } from './type'

// hooks
import { useChangeColor } from 'hooks'

// styles
import style from 'styles/styled-components/styled'

const Toast = ({ icon, text, _backgroundColor = 'error100', _color = 'error400' }: IToast) => {
  return (
    <ToastComponent _backgroundColor={useChangeColor(_backgroundColor)}>
      {icon}

      <TextP typo="c_b" textColor={_color}>
        {text}
      </TextP>
    </ToastComponent>
  )
}

const { TextP } = style

export default Toast
