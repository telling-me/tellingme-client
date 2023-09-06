import React from 'react'

// components
import { Button, Modal } from 'components'
import type { IOneButtonModal } from './type'

// styles
import style from 'styles/styled-components/styled'

const OneButtonModal = ({ text, _onClick }: IOneButtonModal) => {
  return (
    <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
      <style.TextP typo="b1" textColor="black">
        {text}
      </style.TextP>

      <Button
        buttonType="secondary"
        text="확인"
        textSize="h6"
        textColor="logo"
        _width="100%"
        _margin="28px 0 0"
        _padding="18px 0"
        _onClick={_onClick}
      />
    </Modal>
  )
}

export default OneButtonModal
