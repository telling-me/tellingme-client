import React, { useState } from 'react'

import { DropdownButton, DropdownComponent, DropdownItem, DropdownList } from './style'
import type { IDropdown } from './type'

import style from 'styles/styled-components/styled'
import { Icon } from 'components'

const Dropdown = ({
  label,
  defaultText,
  data,
  _selected,
  _setSelected,
  _width,
  _padding,
  _margin,
  _flexGrow
}: IDropdown) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownComponent _width={_width} _margin={_margin} _flexGrow={_flexGrow}>
      <style.TextSpan textSize="h6" textColor="black" _margin="0px 10px">
        {label}
      </style.TextSpan>

      <DropdownButton
        _padding={_padding}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <style.TextSpan textSize="b1" textColor={isOpen || _selected !== undefined ? 'black' : 'gray4'} _width="100%">
          {_selected !== undefined ? _selected : defaultText}
        </style.TextSpan>

        <Icon icon={isOpen ? 'caretup' : 'caretdown'} iconSize="medium" iconColor="side500" _margin="0px 0px 0px 4px" />
      </DropdownButton>

      {isOpen && (
        <DropdownList label={label}>
          {data.map((v) => {
            return (
              <DropdownItem
                key={v}
                _padding={_padding}
                onClick={() => {
                  _setSelected(v.toString())
                  setIsOpen(false)
                }}
              >
                <style.TextSpan textSize="b1" textColor="black">
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
