import Cookies, { type CookieSetOptions } from 'universal-cookie'

const cookies = new Cookies()

export const setCookie = (name: string, value: string, option?: CookieSetOptions) => {
  new Cookies().set(name, value, { ...option })
}

export const getCookie = (name: string) => {
  return new Cookies().get(name)
}

export const removeCookie = (name: string, option?: CookieSetOptions) => {
  cookies.remove(name, { ...option })
}
