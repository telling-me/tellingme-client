export const DropdownData = {
  year: { defaultText: '년\u00a0\u00a0\u00a0', data: new Array(70).fill(0).map((_, i) => 2023 - i) },
  month: { defaultText: '월\u00a0', data: new Array(12).fill(0).map((_, i) => i + 1) },
  day: { defaultText: '일\u00a0', data: new Array(31).fill(0).map((_, i) => i + 1) },
  mbti: {
    defaultText: 'mbti 선택',
    data: [
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
  }
}
