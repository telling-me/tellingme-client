import React from 'react'
import { Icon, ListViewButton } from 'components'
import type { IMyAnswerMode } from './type'

const NormalListButton = ({ isSelected, _onClick }: IMyAnswerMode) => {
  return (
    <ListViewButton isSelected={isSelected} _onClick={_onClick}>
      <Icon icon="rows" iconSize="medium" iconColor={isSelected ? 'side500' : 'gray2'} />
    </ListViewButton>
  )
}

export default NormalListButton
