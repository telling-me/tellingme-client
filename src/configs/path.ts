export enum PAGE_URL {
  // Landing
  Home = '/',
  Kakao = '/oauth/kakao',
  Apple = '/oauth/apple',
  CheckPushToken = '/oauth/checktoken',

  // App
  App = 'app',
  Main = 'main',
  MyAnswer = 'myAnswer',
  AllAnswer = 'Allanswer',
  Setting = 'setting',
  Error500 = '500',
  Error403 = '403',
  Dev = 'dev',

  // NewsLetter
  NewsLetter = 'newsletter',
  NewsLetterComplete = 'complete',
  NewsLetterUnsubscribe = 'unsubscribe',
  NewsLetterUnsubscribeComplete = 'unsubscribe/complete',

  // SignUp
  SignUp = 'signup',
  SignUpComplete = '/signup/complete'
}
