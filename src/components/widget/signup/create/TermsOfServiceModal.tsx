import React from 'react'

// components
import styled, { useTheme } from 'styled-components'
import { CheckBox, IconButton, Modal } from 'components'

// styles
import style from 'styles/styled-components/styled'

// assets
import Icons from 'assets/icons'

interface ITermsOfServiceModal {
  title: string
  content: any[]
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  _checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

const TermsOfServiceModal = ({ title, content, setOpen, _checked, setChecked }: ITermsOfServiceModal) => {
  const theme = useTheme()

  return (
    <Modal _width="100%" _maxWidth="425px" _height="479px" _padding="14px" _borderRadius="20px">
      <IconButton
        buttonType="noFilled"
        _width="fit-content"
        _height="fit-content"
        _margin="0 0 0 auto"
        _onClick={() => {
          setOpen(false)
        }}
      >
        <Icons.Close width="24" height="24" stroke={theme.colors.gray.gray8} />
      </IconButton>

      <style.TextP typo="b1_b" textColor="gray7" _margin="4px 0 20px 0">
        {title}
      </style.TextP>

      <TermsOfServiceContent>
        {content.map((v, i) => {
          return (
            <style.TextP key={i} typo={v._typo} textColor="black" _width="100%" _margin={v._margin}>
              {v.content}
            </style.TextP>
          )
        })}
      </TermsOfServiceContent>

      <CheckBox
        label="네, 동의할게요."
        checkSize="small"
        _checked={_checked}
        customChange={() => {
          setChecked(!_checked)

          if (!_checked) {
            setOpen(false)
          }
        }}
        isBackground={false}
        _margin="12px 0 0 0"
        _padding="0"
      />
    </Modal>
  )
}

const TermsOfServiceContent = styled.div`
  background-color: ${({ theme }) => theme.colors.side.side200};
  border-radius: 8px;

  width: 100%;
  height: 100%;
  padding: 20px 10px;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  p {
    line-height: 18px;
    white-space: pre-wrap;
  }
`

export default TermsOfServiceModal
