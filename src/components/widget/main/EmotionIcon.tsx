import React from 'react'
// data
import { emotionList } from 'data/emotion'

const EmotionIcon = ({
  emotion,
  width,
  fill,
  stroke
}: {
  emotion: number | null
  width: number | string
  fill?: string
  stroke?: string
}) => {
  return (
    <>
      {emotionList.map((item, idx) => {
        if (emotion === item.idx) return <item.icon key={idx} width={width} fill={fill} stroke={stroke} />
        else return null
      })}
    </>
  )
}

export default EmotionIcon
