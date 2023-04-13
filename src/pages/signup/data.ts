import type { ColorType, IconType } from 'type/common'

export const stepTextData = [
  '서비스 이용 약관',
  '닉네임을 정해주세요',
  '고민을 알려주세요',
  '직업을 알려주세요',
  '성별을 알려주세요',
  '생일을 알려주세요',
  'mbti는 무엇인가요'
]
export const purposeData: Array<{ text: string; icon: IconType }> = [
  { text: '학업/진로', icon: 'pen' },
  { text: '대인 관계', icon: 'handshake' },
  { text: '성격/가치관', icon: 'values' },
  { text: '행동/습관', icon: 'magnet' },
  { text: '건강', icon: 'health' },
  { text: '기타', icon: 'heart' }
]
export const jobData: Array<{ text: string; icon: IconType }> = [
  { text: '고등학생', icon: 'bagpack' },
  { text: '대학(원)생', icon: 'graduationcap' },
  { text: '취업준비생', icon: 'smiley' },
  { text: '직장인', icon: 'briefcase' },
  { text: '주부', icon: 'cookpot' }
]
export const genderData: Array<{ text: string; icon: IconType; iconColor: ColorType }> = [
  { text: '남성', icon: 'male', iconColor: 'secondary700' },
  { text: '여성', icon: 'female', iconColor: 'error300' }
]
export const mbtiData = [
  'ENFJ',
  'ENFP',
  'ENTJ',
  'ENTP',
  'ESTP',
  'ESFP',
  'ESTJ',
  'ESFJ',
  'INFJ',
  'INFP',
  'INTJ',
  'INTP',
  'ISTP',
  'ISFP',
  'ISFJ',
  'ISTJ'
]
export const birthDateData: Array<{
  defaultText: string
  data: string[] | number[]
  _padding: string
  _flexGrow: string
}> = [
  {
    defaultText: '년\u00a0\u00a0\u00a0',
    data: new Array(70).fill(0).map((_, i) => 2023 - i),
    _padding: '16.5px 20px',
    _flexGrow: '2'
  },
  {
    defaultText: '월\u00a0',
    data: new Array(12).fill(0).map((_, i) => i + 1),
    _padding: '16.5px 20px',
    _flexGrow: '1'
  },
  {
    defaultText: '일\u00a0',
    data: new Array(31).fill(0).map((_, i) => i + 1),
    _padding: '16.5px 20px',
    _flexGrow: '1'
  }
]
