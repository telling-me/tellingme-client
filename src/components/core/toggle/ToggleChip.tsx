/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react'
import { type IToggleChip } from './type'
import style from 'styles/styled-components/styled'
import styled from 'styled-components'
import useChangeColor from 'hooks/useChangeColor'

/**
 * ToggleChip 전체읽음 처리버튼
 * @property {string} label(선택) - 버튼 텍스트
 * @property {boolean} action(선택) - 버튼 눌렀을떄 감지
 * @property {string} color(선택) - 버튼 텍스트 색상
 * @property {string} actionColor(선택) - 버튼 눌렀을때 색상
 * @property {boolean} _disabled(선택) - 버튼 비활성화
 * @property {string} _margin(선택)
 * @property {string} _width(선택)
 * @property {string} _height(선택)
 * @property {string} _padding(선택)
 * @property {function} _onClick(선택)
 */
const ToggleChip = ({
  label,
  action = false,
  color = 'gray7',
  actionColor = 'gray4',
  _disabled = false,
  _margin,
  _width = 'fit-content',
  _height = 'fit-content',
  _padding = '8px 10px',
  _onClick = () => {}
}: IToggleChip) => {
  return (
    <ToggleChipWrapper
      _width={_width}
      _height={_height}
      _padding={_padding}
      _margin={_margin}
      onClick={_onClick}
      borderColor={useChangeColor(action ? actionColor : color)}
    >
      <TextP typo="c" textColor={action ? actionColor : color}>
        {label}
      </TextP>
    </ToggleChipWrapper>
  )
}

const { Grid, TextP } = style

const ToggleChipWrapper = styled(Grid)<{ borderColor: string }>`
  cursor: pointer;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.colors.side.side100};
  ${({ borderColor }) => `border: 1px solid ${borderColor}`};
`

export default ToggleChip
