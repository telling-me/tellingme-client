import React from 'react'
// style
import { ModalBackground, ModalComponent } from './style'
// type
import type { IModal } from './type'
// ani
import { modalAni } from 'styles/ani'

const Modal = ({ _width, _maxWidth, _height, _maxHeight, _borderRadius, _padding, _onClick, children }: IModal) => {
  return (
    <ModalBackground onClick={_onClick} variants={modalAni} initial="init" animate="ani" exit="exit">
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
