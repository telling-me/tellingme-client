import React from 'react'
import { ToolTipComponent, ToolTipTextWrapper, ToolTipWrapper } from './style'
import type { IToolTip } from './type'
import style from 'styles/styled-components/styled'
import Icon from 'assets/icons'

const ToolTip = ({ tooltipType, tooltipText, children }: IToolTip) => {
  return (
    <ToolTipComponent>
      {children}

      <ToolTipWrapper tooltipType={tooltipType}>
        {['topLeft', 'topRight'].includes(tooltipType) && <Icon.ToolTipTriangle transform="rotate(180)" />}
        {tooltipType === 'left' && <Icon.ToolTipTriangle2 />}

        <ToolTipTextWrapper>
          <style.TextSpan textColor="gray0" typo="c">
            {tooltipText}
          </style.TextSpan>
        </ToolTipTextWrapper>

        {['bottom', 'bottomLeft', 'bottomRight'].includes(tooltipType) && (
          <Icon.ToolTipTriangle transform="rotate(360)" />
        )}
        {tooltipType === 'right' && <Icon.ToolTipTriangle2 transform="rotate(180)" />}
      </ToolTipWrapper>
    </ToolTipComponent>
  )
}

export default ToolTip
