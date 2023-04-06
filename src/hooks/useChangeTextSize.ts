import { type TextSize } from 'components/core/button/type'
import { Theme } from 'styles/DefaultTheme'

// h1 -> 48px 형식으로 변경
const useChangeTextSize = (beforeTextSize: TextSize) => {
  const afterTextSize = Object.keys(Theme.typo.title).includes(beforeTextSize)
    ? Theme.typo.title[beforeTextSize as keyof typeof Theme.typo.title]
    : Object.keys(Theme.typo.body).includes(beforeTextSize)
    ? Theme.typo.body[beforeTextSize as keyof typeof Theme.typo.body]
    : Theme.typo.caption[beforeTextSize as keyof typeof Theme.typo.caption]

  return afterTextSize
}

export default useChangeTextSize
