import { Theme } from 'styles/DefaultTheme'

// primary200 -> ##B0F5CA 형식으로 변경
const useChangeColor = (beforeColor: string) => {
  const afterColor = Object.keys(Theme.colors.primary).includes(beforeColor)
    ? Theme.colors.primary[beforeColor]
    : Object.keys(Theme.colors.secondary).includes(beforeColor)
    ? Theme.colors.secondary[beforeColor]
    : Object.keys(Theme.colors.gray).includes(beforeColor)
    ? Theme.colors.gray[beforeColor]
    : Object.keys(Theme.colors.error).includes(beforeColor)
    ? Theme.colors.error[beforeColor]
    : Object.keys(Theme.colors.side).includes(beforeColor)
    ? Theme.colors.side[beforeColor as keyof typeof Theme.colors.side]
    : Object.keys(Theme.colors.emotion).includes(beforeColor)
    ? Theme.colors.emotion[beforeColor]
    : Object.keys(Theme.colors.sub).includes(beforeColor)
    ? Theme.colors.sub[beforeColor]
    : beforeColor === 'logo' && Theme.colors.logo

  return afterColor
}

export default useChangeColor
