/* eslint-disable no-useless-escape */
export const emailCheck = (email: string) => {
  const _reg = /^((\w|[\-\.])+)@((\w|[\-\.])+)\.([A-Za-z]+){2,3}$/
  return _reg.test(email)
}

export const passwordCheck = (password: string) => {
  const _reg =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[A-Za-z\d/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}$/
  return _reg.test(password)
}

export const phoneCheck = (phone: string) => {
  const _reg = /^010\d{3,4}\d{4}$/
  return _reg.test(phone)
}
