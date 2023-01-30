import firebaseApp from "../firebase/credenciales";
import { getFirestore , collection , doc , setDoc } from 'firebase/firestore';
const db = getFirestore();

function añadirEvento(infoEvento){
    const collectionRef = collection(db,"eventos");
    const docRef = doc(collectionRef,infoEvento.title);
    setDoc(docRef,infoEvento);
}

export default añadirEvento;