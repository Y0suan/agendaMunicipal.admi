import firebaseApp from "../firebase/credenciales";
import { getAuth ,signOut } from  'firebase/auth';
const auth = getAuth(firebaseApp);

function cerrarSecion(){
    signOut(auth);
}

export default cerrarSecion