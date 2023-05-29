export const mediaQuery = (width: number) => {
  if (width >= 1200) {
    return 'desktop'
  } else if (width >= 1024 && width <= 1199) {
    return 'tablet_horizontal'
  } else if (width >= 768 && width <= 1023) {
    return 'tablet_vertical'
  } else if (width <= 767) {
    return 'mobile'
  }
}
