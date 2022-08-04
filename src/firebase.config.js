import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgtmUZ0dOMdTiCA9QqoeJ_1ArSaki56Ss",
  authDomain: "restaurantapp-1f4a1.firebaseapp.com",
  databaseURL:
    "https://restaurantapp-1f4a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "restaurantapp-1f4a1",
  storageBucket: "restaurantapp-1f4a1.appspot.com",
  messagingSenderId: "317322744430",
  appId: "1:317322744430:web:f864a7e5a25831cb7f4c7f",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
