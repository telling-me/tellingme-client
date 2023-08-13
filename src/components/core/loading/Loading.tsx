import React from 'react'
import { DotWave } from '@uiball/loaders'

// hooks
import useChangeColor from 'hooks/useChangeColor'
import useWindowSize from 'hooks/useWindowSize'

interface ILoadingComponent {
  size?: number
  color?: string
}

const LoadingComponent = ({ size, color = 'logo' }: ILoadingComponent) => {
  const windowWidth = useWindowSize().width

  return <DotWave size={size != null ? size : windowWidth < 768 ? 48 : 84} speed={1} color={useChangeColor(color)} />
}

export default LoadingComponent
