import React from 'react'
import styled from 'styled-components'

// assets
import Icons from 'assets/icons'

// styles
import { Theme } from 'styles/DefaultTheme'
import style from 'styles/styled-components/styled'
import useCommunicationStore from 'stores/useCommunicationStore'

const ListFooter = () => {
  const { questionIdx, setQuestionIdx, setPage } = useCommunicationStore()

  const handlePrev = () => {
    setQuestionIdx(+questionIdx - 1)
    setPage(0)
  }

  const handleNext = () => {
    setQuestionIdx(+questionIdx + 1)
    setPage(0)
  }

  return (
    <ListFooterWrapper>
      {questionIdx !== 0 && (
        <MoveButton onClick={handlePrev}>
          <Icons.CaretLeft width="20" height="20" stroke={Theme.colors.gray.gray8} />
          <style.TextP typo="c_b" textColor="gray8">
            이전 질문
          </style.TextP>
        </MoveButton>
      )}

      {questionIdx !== 2 && (
        <MoveButton _margin="0 0 0 auto" onClick={handleNext}>
          <style.TextP typo="c_b" textColor="gray8">
            다음 질문
          </style.TextP>
          <Icons.CaretRight width="20" height="20" stroke={Theme.colors.gray.gray8} />
        </MoveButton>
      )}
    </ListFooterWrapper>
  )
}

const ListFooterWrapper = styled.div`
  ${({ theme }) => theme.common.flexStart}

  width: 100%;
  height: 40px;
  padding: 10px 0;
  margin: auto 0 0 0;
`

const MoveButton = styled.button<{ _margin?: string }>`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  ${({ _margin }) => _margin != null && `margin: ${_margin};`}
`

export default ListFooter
