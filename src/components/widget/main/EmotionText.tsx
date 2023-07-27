import React from 'react'
import styled, { useTheme } from 'styled-components'
import style from 'styles/styled-components/styled'

interface IEmotionText {
  _backgroundColor?: 'side100' | 'side200'
  text: string
}

const EmotionText = ({ _backgroundColor = 'side200', text }: IEmotionText) => {
  const theme = useTheme()

  return (
    <EmotionTextComponent
      _backgroundColor={_backgroundColor === 'side100' ? theme.colors.side.side100 : theme.colors.side.side200}
    >
      <style.TextP typo="b2_b" textColor="gray6">
        {text}
      </style.TextP>
    </EmotionTextComponent>
  )
}

const EmotionTextComponent = styled.div<{ _backgroundColor: string }>`
  background-color: ${({ _backgroundColor }) => _backgroundColor};
  border-radius: 4px;
  padding: 4px;
`

export default EmotionText
