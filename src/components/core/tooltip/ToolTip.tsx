import React from 'react'
import { ToolTipComponent, ToolTipTextWrapper, ToolTipWrapper } from './style'
import type { IToolTip } from './type'
import style from 'styles/styled-components/styled'
import Icon from 'assets/icons'
import { useTheme } from 'styled-components'

const ToolTip = ({
  tooltipType = 'topLeft',
  tooltipText,
  children,
  childrenWidth = 20,
  isError = true,
  _margin
}: IToolTip) => {
  const theme = useTheme()

  const textArr = tooltipText.split('|')

  return (
    <ToolTipComponent _margin={_margin}>
      {children}

      <ToolTipWrapper tooltipType={tooltipType} childrenWidth={childrenWidth} _margin={_margin}>
        {['topLeft', 'topRight'].includes(tooltipType) && (
          <Icon.ToolTipTriangle
            transform="rotate(180)"
            fill={isError ? theme.colors.error.error400 : theme.colors.side.side500}
          />
        )}
        {tooltipType === 'left' && <Icon.ToolTipTriangle2 />}

        <ToolTipTextWrapper isError={isError}>
          {textArr.map((text, i) => {
            return (
              <style.TextP key={i} textColor={isError ? 'gray0' : 'side100'} typo="c">
                {text}
              </style.TextP>
            )
          })}
        </ToolTipTextWrapper>

        {['bottom', 'bottomLeft', 'bottomRight'].includes(tooltipType) && (
          <Icon.ToolTipTriangle transform="rotate(360)" />
        )}
        {tooltipType === 'right' && (
          <Icon.ToolTipTriangle2
            transform="rotate(180)"
            fill={isError ? theme.colors.error.error400 : theme.colors.side.side500}
          />
        )}
      </ToolTipWrapper>
    </ToolTipComponent>
  )
}

export default ToolTip
