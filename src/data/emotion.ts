import { type ComponentClass, type FunctionComponent } from 'react'
import Icon from 'assets/icons'

export interface IEmotion {
  idx: number
  icon: string | FunctionComponent<any> | ComponentClass<any, any>
}

export const emotionList: IEmotion[] = [
  {
    idx: 1,
    icon: Icon.Pen
  },
  {
    idx: 2,
    icon: Icon.ArrowLeft
  },
  {
    idx: 3,
    icon: Icon.ArrowRight
  },
  {
    idx: 4,
    icon: Icon.Bagpack
  },
  {
    idx: 5,
    icon: Icon.Briefcase
  },
  {
    idx: 6,
    icon: Icon.CaretDown
  },
  {
    idx: 7,
    icon: Icon.ToolTipTriangle2
  },
  {
    idx: 8,
    icon: Icon.Menu
  },
  {
    idx: 9,
    icon: Icon.Columns
  },
  {
    idx: 10,
    icon: Icon.Columns
  },
  {
    idx: 11,
    icon: Icon.Columns
  },
  {
    idx: 12,
    icon: Icon.Columns
  }
]
