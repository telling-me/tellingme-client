importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAiVPVMDT0wGuxUn12Om1-m8XG2WHofH7A',
  projectId: 'tellingus-tellingme',
  messagingSenderId: '438433128224',
  appId: '1:438433128224:web:c91e8f5d48ffe6f6040145'
})

const messaging = firebase.messaging()
