import React from 'react'
import styled from 'styled-components'

// components
import { Button, Modal } from 'components'
import type { ITwoButtonModal } from './type'

// styles
import style from 'styles/styled-components/styled'

const TwoButtonModal = ({
  mainText,
  subText,
  subTextColor = 'gray7',
  leftBtnText = '취소',
  rightBtnText,
  leftBtnOnClick,
  rightBtnOnClick,
  children
}: ITwoButtonModal) => {
  return (
    <Modal _width="100%" _maxWidth="425px" _padding="30px 20px 20px" _borderRadius="20px">
      <ModalChildren>
        <ModalTexts>
          <TextP typo="b1" textColor="black">
            {mainText}
          </TextP>

          {subText != null && (
            <TextP typo="b2" textColor={subTextColor}>
              {subText}
            </TextP>
          )}
        </ModalTexts>

        {children}

        <ModalButtons>
          <Button
            buttonType="tertiary"
            text={leftBtnText}
            textSize="h6"
            textColor="logo"
            _width="135px"
            _padding="18px 0"
            _onClick={leftBtnOnClick}
          />
          <Button
            buttonType="secondary"
            text={rightBtnText}
            textSize="h6"
            textColor="logo"
            _width="135px"
            _padding="18px 0"
            _onClick={rightBtnOnClick}
          />
        </ModalButtons>
      </ModalChildren>
    </Modal>
  )
}

const { TextP } = style

const ModalChildren = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
`

const ModalTexts = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 8px;
`

const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 28px;
`

export default TwoButtonModal
