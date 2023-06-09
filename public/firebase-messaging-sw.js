import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging/sw'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAiVPVMDT0wGuxUn12Om1-m8XG2WHofH7A',
  projectId: 'tellingus-tellingme',
  messagingSenderId: '438433128224',
  appId: '1:438433128224:web:c91e8f5d48ffe6f6040145'
})

const messaging = getMessaging(firebaseApp)
