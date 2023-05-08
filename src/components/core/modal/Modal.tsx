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
        _maxHeight={_maxHeight}
        _borderRadius={_borderRadius}
        _padding={_padding}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </ModalComponent>
    </ModalBackground>
  )
}

export default Modal
