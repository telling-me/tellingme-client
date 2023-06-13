import React from 'react'
import { DotWave } from '@uiball/loaders'
import useChangeColor from 'hooks/useChangeColor'

interface ILoadingComponent {
  size?: number
  color?: string
}

const LoadingComponent = ({ size = 84, color = 'logo' }: ILoadingComponent) => {
  return <DotWave size={size} speed={1} color={useChangeColor(color)} />
}

export default LoadingComponent
