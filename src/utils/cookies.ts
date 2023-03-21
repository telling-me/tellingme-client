import Cookies, { type CookieSetOptions } from 'universal-cookie'

const cookies = new Cookies()

export const setCookie = (
  name: string,
  value: string,
  option?: CookieSetOptions
) => {
  new Cookies().set(name, value, { ...option })
}

export const getCookie = (name: string) => {
  return new Cookies().get(name)
}

export const removeCookie = (name: string, option?: CookieSetOptions) => {
  cookies.remove(name, { ...option })
}

export const getContextCookie = (context: any) => {
  if (context === true || context?.req?.headers?.cookie === true) return ''
  const cookie = context.req.headers.cookie.split(';')

  const _token = cookie.find((item: string) =>
    item.includes('imms_access_token')
  )

  const token = _token === true ? _token.split('=')[1] : ''

  return token
}
