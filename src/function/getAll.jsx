import firebaseApp from "../firebase/credenciales";
import { getFirestore , collection , getDocs } from 'firebase/firestore';
const db =getFirestore(firebaseApp);

export default async function getAll(){
    const eventos = [] ;
    const collectionRef = collection(db,'eventos')
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc)=>{
        eventos.push(doc.data());
    });
    return eventos;
}