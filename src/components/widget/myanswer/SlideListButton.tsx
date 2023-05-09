import React from 'react'
import { Icon, ListViewButton } from 'components'
import type { IMyAnswerMode } from './type'

const SlideListButton = ({ isSelected, _onClick }: IMyAnswerMode) => {
  return (
    <ListViewButton isSelected={isSelected} _onClick={_onClick}>
      <Icon icon="columns" iconSize="medium" iconColor={isSelected ? 'side500' : 'gray2'} />
    </ListViewButton>
  )
}

export default SlideListButton
