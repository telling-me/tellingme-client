export const APPLE_LOGIN_CLIENT_ID = process.env.REACT_APP_APPLE_LOGIN_CLIENT_ID as string
export const APPLE_LOGIN_REDIRECT_URL = `https://${window.location.host}${
  process.env.REACT_APP_APPLE_LOGIN_REDIRECT_URL as string
}`

export const APPLE_WITHDRAW_REDIRECT_URL = `https://${window.location.host}${
  process.env.REACT_APP_APPLE_WITHDRAW_REDIRECT_URL as string
}`

const loginConfig = {
  client_id: APPLE_LOGIN_CLIENT_ID, // This is the service ID we created.
  redirect_uri: APPLE_LOGIN_REDIRECT_URL, // As registered along with our service ID
  response_type: 'code id_token',
  scope: '', // To tell apple we want the user name and emails fields in the response it sends us.
  response_mode: 'fragment',
  m: 11,
  v: '1.5.4'
}

const withdrawConfig = {
  client_id: APPLE_LOGIN_CLIENT_ID, // This is the service ID we created.
  redirect_uri: APPLE_WITHDRAW_REDIRECT_URL, // As registered along with our service ID
  response_type: 'code id_token',
  scope: '', // To tell apple we want the user name and emails fields in the response it sends us.
  response_mode: 'fragment',
  m: 11,
  v: '1.5.4'
}

const loginQueryString = Object.entries(loginConfig)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&')

const withdrawQueryString = Object.entries(withdrawConfig)
  .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
  .join('&')

export const APPLE_AUTH_URL = `https://appleid.apple.com/auth/authorize?${loginQueryString}`
export const APPLE_WITHDRAW_URL = `https://appleid.apple.com/auth/authorize?${withdrawQueryString}`
