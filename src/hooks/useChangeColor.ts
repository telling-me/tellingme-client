import { Theme } from 'styles/DefaultTheme'

// primary200 -> ##B0F5CA 형식으로 변경
const useChangeColor = (beforeColor: string) => {
  const afterColor = beforeColor.includes('primary')
    ? Theme.colors.primary[beforeColor]
    : beforeColor.includes('secondary')
    ? Theme.colors.secondary[beforeColor]
    : beforeColor.includes('gray')
    ? Theme.colors.gray[beforeColor]
    : beforeColor.includes('error')
    ? Theme.colors.error[beforeColor]
    : beforeColor.includes('side')
    ? Theme.colors.side[beforeColor as keyof typeof Theme.colors.side]
    : beforeColor.includes('logo')
    ? Theme.colors.logo
    : beforeColor.includes('black') && Theme.colors.gray.black

  return afterColor
}

export default useChangeColor
