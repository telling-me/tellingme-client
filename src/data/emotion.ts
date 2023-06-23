import { type ComponentClass, type FunctionComponent } from 'react'
import Icon from 'assets/icons'

export interface IEmotion {
  idx: number
  description: string
  icon: string | FunctionComponent<any> | ComponentClass<any, any>
  membership: boolean
}

export const emotionList: IEmotion[] = [
  {
    idx: 1,
    description: '행복해요',
    icon: Icon.Pen,
    membership: false
  },
  {
    idx: 2,
    description: '뿌듯해요',
    icon: Icon.ArrowLeft,
    membership: false
  },
  {
    idx: 3,
    description: '그저 그래요',
    icon: Icon.ArrowRight,
    membership: false
  },
  {
    idx: 4,
    description: '피곤해요',
    icon: Icon.Bagpack,
    membership: false
  },
  {
    idx: 5,
    description: '슬퍼요',
    icon: Icon.Briefcase,
    membership: false
  },
  {
    idx: 6,
    description: '화나요',
    icon: Icon.CaretDown,
    membership: false
  },
  {
    idx: 7,
    description: '설레요',
    icon: Icon.TooltipBottom,
    membership: true
  },
  {
    idx: 8,
    description: '신나요',
    icon: Icon.Menu,
    membership: true
  },
  {
    idx: 9,
    description: '',
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 10,
    description: '무기력해요',
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 11,
    description: '외로워요',
    icon: Icon.Columns,
    membership: true
  },
  {
    idx: 12,
    description: '복잡해요',
    icon: Icon.Columns,
    membership: true
  }
]
