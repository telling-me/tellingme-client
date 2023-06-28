import React from 'react'
// data
import { emotionList } from 'data/emotion'

const EmotionIcon = ({ emotion, width }: { emotion: number | null; width: number | string }) => {
  return (
    <>
      {emotionList.map((item, idx) => {
        if (emotion === item.idx) return <item.icon key={idx} width={width} />
        else return null
      })}
    </>
  )
}

export default EmotionIcon
