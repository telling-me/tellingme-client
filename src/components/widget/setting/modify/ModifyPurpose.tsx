import React from 'react'

// component
import style from 'styles/styled-components/styled'
import { ChoiceChips } from 'components'
import { SelectInnerWrapper, SelectOuterWrapper } from './style'

interface IModifyPurpose {
  purpose: string[]
  setPurpose: React.Dispatch<React.SetStateAction<string[]>>
}

const ModifyPurpose = ({ purpose, setPurpose }: IModifyPurpose) => {
  const LINE_ONE = ['학업 / 진로', '대인관계', '성격 / 가치관']
  const LINE_TWO = ['행동 / 습관', '기타']

  const handleClick = (index: string) => {
    const purposeIndex = purpose.indexOf(index)

    if (purposeIndex !== -1) {
      if (purpose.length === 1) {
        setPurpose([])
      } else {
        setPurpose([purpose[1 - purposeIndex]])
      }
    } else if (purpose.length < 2) {
      setPurpose([...purpose, index])
    }
  }

  return (
    <>
      <style.TextP typo="h6" textColor="black" _margin="0px 0px 0px 10px">
        고민
      </style.TextP>
      <style.TextP typo="c" textColor="gray7" _margin="4px 0px 16px 10px">
        최대 2가지 중복 선택 가능
      </style.TextP>

      <SelectOuterWrapper>
        <SelectInnerWrapper>
          {LINE_ONE.map((p, i) => {
            return (
              <ChoiceChips
                key={i}
                chipText={p}
                _active={purpose.includes(i.toString())}
                _onClick={() => {
                  handleClick(i.toString())
                }}
              />
            )
          })}
        </SelectInnerWrapper>
        <SelectInnerWrapper>
          {LINE_TWO.map((p, i) => {
            return (
              <ChoiceChips
                key={i + 3}
                chipText={p}
                _active={purpose.includes((i + 3).toString())}
                _onClick={() => {
                  handleClick((i + 3).toString())
                }}
              />
            )
          })}
        </SelectInnerWrapper>
      </SelectOuterWrapper>
    </>
  )
}

export default ModifyPurpose
