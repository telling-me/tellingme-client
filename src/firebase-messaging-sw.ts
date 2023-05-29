import firebase from 'firebase'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const messaging = firebase.messaging()

export function requestPermission() {
  console.log('Requesting permission...')

  void Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.')
    } else if (permission === 'denied') {
      console.log('Notification permission denied')
    }
  })

  messaging
    .getToken({ vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY })
    .then((currentToken) => {
      if (currentToken.length > 0) {
        console.log('token : ', currentToken)
      } else {
        console.log('No registration token available. Request permission to generate one.')
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err)
    })

  messaging.onMessage((payload) => {
    console.log('Message received. ', payload)
  })
}
