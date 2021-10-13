import {initializeApp} from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyABdRyfMc-uQgfUdhj1p3l8_nufr-JZm-E",
  
    authDomain: "tiendablu-41.firebaseapp.com",
  
    projectId: "tiendablu-41",
  
    storageBucket: "tiendablu-41.appspot.com",
  
    messagingSenderId: "308324989172",
  
    appId: "1:308324989172:web:c61035867abb555877c6a1"
  
  };
  
  
  const app = initializeApp(firebaseConfig)

  export const getFirebase = () => {
      return app
  }
  
export const db = getFirestore(app)
