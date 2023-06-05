import React from 'react'
import { AlarmWrapper, SpanWrapper } from './style'

// components
import style from 'styles/styled-components/styled'
import { Button } from 'components'

// assets
import Icons from 'assets/icons'

interface ICreateNotification {
  setAllowNotification: React.Dispatch<React.SetStateAction<boolean>>
  _onClick: React.MouseEventHandler<HTMLButtonElement>
}

const CreateNotification = ({ setAllowNotification, _onClick }: ICreateNotification) => {
  return (
    <AlarmWrapper>
      <SpanWrapper>
        <style.TextSpan typo="h5" textColor="black">
          매일 기록을 잊지 않도록
        </style.TextSpan>
        <style.TextSpan typo="h4" textColor="black">
          알람을 드려도 될까요?
        </style.TextSpan>
      </SpanWrapper>

      <Icons.BellRinging width="150" height="150" fill="url(#gradient)" />

      <Button
        buttonType="secondary"
        text="네, 좋아요!"
        textSize="h6"
        textColor="logo"
        _padding="18px 32px"
        _onClick={() => {
          setAllowNotification(true)
        }}
      />
      <Button
        buttonType="noFilled"
        text="괜찮아요"
        textSize="b1"
        textColor="gray5"
        _margin="26px 0px 0px 0px"
        _onClick={_onClick}
      />
    </AlarmWrapper>
  )
}

export default CreateNotification
