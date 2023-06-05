import React from 'react'

// components
import { ListViewButton } from 'components'

// type
import type { IMyAnswerMode } from './type'

// hooks
import useChangeColor from 'hooks/useChangeColor'

// assets
import Icons from 'assets/icons'

const NormalListButton = ({ isSelected, _onClick }: IMyAnswerMode) => {
  return (
    <ListViewButton isSelected={isSelected} _onClick={_onClick}>
      <Icons.Rows width="24" height="24" stroke={useChangeColor(isSelected ? 'side500' : 'gray2')} />
    </ListViewButton>
  )
}

export default NormalListButton
