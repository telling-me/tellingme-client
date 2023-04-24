import React from 'react'
import { ModalBackground, ModalComponent } from './style'
import type { IModal } from './type'

const Modal = ({ _width, _maxWidth, _height, _maxHeight, _borderRadius, _padding, _onClick, children }: IModal) => {
  return (
    <ModalBackground onClick={_onClick}>
      <ModalComponent
        _width={_width}
        _maxWidth={_maxWidth}
        _height={_height}
        _borderRadius={_borderRadius}
        _padding={_padding}
      >
        {children}
      </ModalComponent>
    </ModalBackground>
  )
}

export default Modal
