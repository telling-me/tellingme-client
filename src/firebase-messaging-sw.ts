import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

// utils
import { setCookie } from 'utils/cookies'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope)
    })
    .catch(function (err) {
      console.log('Service worker registration failed, error:', err)
    })
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const messaging = getMessaging(app)

export function requestPermission(setPushToken: React.Dispatch<React.SetStateAction<string | undefined>>) {
  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
        .then((token: string) => {
          if (token.length > 0) {
            setPushToken(token)
            setCookie('pushToken', token)
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err)
        })
    } else if (permission === 'denied') {
      setPushToken('denied')
    }
  })
}
