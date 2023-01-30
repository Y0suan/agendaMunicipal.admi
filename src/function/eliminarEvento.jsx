import firebaseApp from "../firebase/credenciales";
import { getFirestore , deleteDoc, collection ,doc} from 'firebase/firestore';
const db= getFirestore(firebaseApp);

export default async function eliminarEvento(evento){
    const colleccionRef = collection(db,'eventos');
    const docuRef = doc(colleccionRef,evento.title);
    const eliminado = await deleteDoc(docuRef) ;
    return eliminado;
}