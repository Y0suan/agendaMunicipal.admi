import firebaseApp from "../firebase/credenciales";
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs,
} from 'firebase/firestore';
const db = getFirestore();

async function filtrarDatos(busqueda,fecha,cat){
    const docusFiltrado = [];

    const collectionRef = collection(db,'eventos');
    const queryCategoria =query(
        collectionRef,
        where('categoria','==',cat)
    )
    const queryTitle = query(
        collectionRef,
        where('title','==',busqueda)
    );
    const queryStart= query(
        collectionRef,
        where('start','==',fecha)
    );

    const arraySnapshots = await Promise.all([
        getDocs(queryCategoria),
        getDocs(queryTitle),
        getDocs(queryStart),
    ]);

    arraySnapshots.forEach((snapshot)=>{
        snapshot.forEach((doc)=>{
            docusFiltrado.push(doc.data());
        });
    });

    console.log(docusFiltrado);
    return docusFiltrado;
}

export default filtrarDatos;