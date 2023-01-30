
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDbiakenHP9cYcBOq197ocwRB8JmvWfNpo",
  authDomain: "jueves-3cd19.firebaseapp.com",
  projectId: "jueves-3cd19",
  storageBucket: "jueves-3cd19.appspot.com",
  messagingSenderId: "499177702850",
  appId: "1:499177702850:web:69f6cfc7fd3c399e39425b"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export default firebaseApp;