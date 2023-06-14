import React from 'react'
import type { Dispatch, SetStateAction } from 'react'

// component
import styled from 'styled-components'
import style from 'styles/styled-components/styled'
import { IconButton } from 'components'

// hook
import useWindowSize from 'hooks/useWindowSize'
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'

interface ISettingContentHeader {
  pageNumber: number
  setIsMenu?: Dispatch<SetStateAction<boolean>>
  _disabled?: boolean
  _onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SettingContentHeader = ({ pageNumber, setIsMenu, _disabled, _onClick }: ISettingContentHeader) => {
  const CONTENT_HEADERS = ['내 정보 수정하기', '이용 약관', '개인정보 처리방침', '회원 탈퇴']
  const windowWidth = useWindowSize().width

  return (
    <HeaderWrapper>
      {windowWidth < 768 && (
        <IconButton
          buttonType="noFilled"
          _width="fit-content"
          _height="fit-content"
          _margin="0 0 0 -4px"
          _onClick={() => {
            if (setIsMenu != null) {
              window.location.replace('/app/setting')
            }
          }}
        >
          <Icons.ArrowLeft width="24" height="24" stroke={useChangeColor('gray6')} />
        </IconButton>
      )}

      <style.TextP typo="h6_b" textColor="gray6" _margin="0px 0px 0px auto">
        {CONTENT_HEADERS[pageNumber]}
      </style.TextP>

      {pageNumber === 0 && _disabled != null && _onClick != null && (
        <CompleteButton disabled={_disabled} onClick={_onClick}>
          <style.TextSpan typo="b1_b" textColor={_disabled ? 'gray2' : 'logo'}>
            완료
          </style.TextSpan>
        </CompleteButton>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  width: 100%;
  padding: 20px 0 14px 0;

  p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media all and (min-width: 768px) {
    height: 56px;
  }

  @media all and (max-width: 767px) {
    height: 66px;
    padding: 20px 0 14px 0;
  }
`

const CompleteButton = styled.button<{ _disabled?: boolean }>`
  position: absolute;
  right: 0;

  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  ${({ _disabled }) => _disabled != null && !_disabled && 'cursor: pointer;'}
`

export default SettingContentHeader
