if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAr_aj1tBFtkJ-gnnWitumHBIl3Zdf_96w",
  "authDomain": "repim-web.firebaseapp.com",
  "databaseURL": "https://repim-web.firebaseio.com",
  "messagingSenderId": "853033878663",
  "projectId": "repim-web",
  "storageBucket": "repim-web.appspot.com"
});