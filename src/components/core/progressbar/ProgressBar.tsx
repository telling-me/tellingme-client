import React from 'react'
import { Progress, ProgressBarComponent } from './style'
import type { IProgressBar } from './type'

const ProgressBar = ({ percent }: IProgressBar) => {
  return (
    <ProgressBarComponent>
      <Progress percent={percent} />
    </ProgressBarComponent>
  )
}

export default ProgressBar
