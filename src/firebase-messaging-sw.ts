/* eslint-disable @typescript-eslint/no-throw-literal */
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
        subscribeTokenToTopic(currentToken)
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

function subscribeTokenToTopic(token: string) {
  fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/notification`, {
    method: 'POST',
    headers: new Headers({
      Authorization: `Bearer ${process.env.REACT_APP_FIREBASE_SERVER_KEY as string}`
    })
  })
    .then((response) => {
      if (response.status < 200 || response.status >= 400) {
        throw response
      }

      console.log('성공', response)
    })
    .catch((error) => {
      console.error(error)
    })
}
