/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'

import type { IDropdown } from './type'
import {
  DropdownButton,
  DropdownComponent,
  DropdownInnerWrapper,
  DropdownItem,
  DropdownList,
  DropdownSelectedField
} from './style'

import style from 'styles/styled-components/styled'
import { Icon } from 'components'

/**
 * @param {DropdownSizeType} dropdownSize - (필수) dropdown 사이즈
 * @param {string} defaultText - (필수) 아무것도 선택되지 않았을 때 보여지는 문구
 * @param {string[]|number[]} data - (필수) dropdown 리스트에 보여질 데이터들
 * @param {string|undefined} _selected (필수) 현재 선택된 데이터
 * @param {Dispatch<SetStateAction<string | undefined>>} _setSelected (필수) 선택된 데이터 저장
 * @param {string} label (선택) 라벨
 * @param {string} _maxWidth (선택) max-width값
 * @param {string} _margin (선택) margin값
 */

const Dropdown = ({
  dropdownSize,
  defaultText,
  data,
  _selected,
  _setSelected,
  label,
  _maxWidth,
  _margin
}: IDropdown) => {
  const [open, setOpen] = useState(false)
  const [listLength, setListLength] = useState('')

  useEffect(() => {
    setListLength(
      dropdownSize === 'small'
        ? data.length > 5
          ? '208px'
          : `${40 * data.length}px`
        : data.length >= 4
        ? '208px'
        : `${52 * data.length}px`
    )
  }, [listLength])

  return (
    <DropdownComponent _margin={_margin} _maxWidth={_maxWidth}>
      {label !== undefined && (
        <style.TextSpan textSize={dropdownSize === 'small' ? 'b1' : 'h6'} textColor="black" _margin="0px 0px 0px 10px">
          {label}
        </style.TextSpan>
      )}

      <DropdownButton
        dropdownSize={dropdownSize}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <DropdownInnerWrapper dropdownSize={dropdownSize}>
          <DropdownSelectedField>
            <style.TextSpan
              textSize={dropdownSize === 'small' ? 'b2' : 'b1'}
              textColor={_selected === undefined ? 'gray4' : 'black'}
            >
              {_selected === undefined ? defaultText : _selected}
            </style.TextSpan>
          </DropdownSelectedField>

          <Icon
            icon={open ? 'caretup' : 'caretdown'}
            iconSize={dropdownSize === 'small' ? 'small' : 'medium'}
            iconColor={dropdownSize === 'small' ? 'gray6' : 'side500'}
          />
        </DropdownInnerWrapper>
      </DropdownButton>

      {open && (
        <DropdownList dropdownSize={dropdownSize} listLength={listLength}>
          {data.map((v, i) => {
            return (
              <DropdownItem
                key={i}
                dropdownSize={dropdownSize}
                onClick={() => {
                  _setSelected(v.toString())
                  setOpen(false)
                }}
              >
                <style.TextSpan textSize={dropdownSize === 'small' ? 'b2' : 'b1'} textColor="black">
                  {v}
                </style.TextSpan>
              </DropdownItem>
            )
          })}
        </DropdownList>
      )}
    </DropdownComponent>
  )
}

export default Dropdown
