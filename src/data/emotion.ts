import { type ComponentClass, type FunctionComponent } from 'react'
import Icon from 'assets/icons'

export interface IEmotion {
  idx: number
  icon: string | FunctionComponent<any> | ComponentClass<any, any>
  membership: boolean
}

export const emotionList: IEmotion[] = [
  {
    idx: 1,
    icon: Icon.Pen,
    membership: false
  },
  {
    idx: 2,
    icon: Icon.ArrowLeft,
    membership: false
  },
  {
    idx: 3,
    icon: Icon.ArrowRight,
    membership: false
  },
  {
    idx: 4,
    icon: Icon.Bagpack,
    membership: false
  },
  {
    idx: 5,
    icon: Icon.Briefcase,
    membership: false
  },
  {
    idx: 6,
    icon: Icon.CaretDown,
    membership: false
  },
  {
    idx: 7,
    icon: Icon.ToolTipTriangle2,
    membership: true
  },
  {
    idx: 8,
    icon: Icon.Menu,
    membership: true
  },
  {
    idx: 9,
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 10,
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 11,
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 12,
    icon: Icon.Columns,
    membership: true
  }
]
