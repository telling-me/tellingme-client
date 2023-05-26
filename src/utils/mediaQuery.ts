export const mediaQuery = (width: number) => {
  if (width >= 1024) {
    return 'desktop'
  } else if (width >= 768 && width <= 1023) {
    return 'tablet'
  } else if (width <= 767) {
    return 'mobile'
  }
}
