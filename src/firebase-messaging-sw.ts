import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app)

export function requestPermission() {
  console.log('푸시 허가 받는 중 ...')

  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('푸시 허가 완료')
    } else {
      console.log('푸시 허가 거부')
    }
  })

  getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
    .then((token) => {
      if (token.length > 0) {
        console.log('푸시 토큰 : ', token)
      } else {
        console.log('푸시 토큰 유효하지 않음')
      }
    })
    .catch((err) => {
      console.log('푸시 에러 : ', err)
    })
}
