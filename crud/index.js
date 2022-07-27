const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc   
} = require('firebase/firestore/lite');
//query -- consulta
//where -- adicionar condições


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase


const firebaseConfig = {
    apiKey: "AIzaSyBflsrW632sJEYJcaBhlyW9vgEaiEQP9Ho",
    authDomain: "atidadebiblioteca.firebaseapp.com",
    projectId: "atidadebiblioteca",
    storageBucket: "atidadebiblioteca.appspot.com",
    messagingSenderId: "782275434334",
    appId: "1:782275434334:web:b503de12a9320322a561cf"
  };
//funcoes no controller e no handller tudo as rota

const app = initializeApp(firebaseConfig);

const db = getFirestore();


async function save(nomeTabela, id, dado) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, nomeTabela, id), dado);
        const savedData = {
            ...dado, id: id
        }
        return savedData;
    } else {
        console.log("referenceEntity")
        const referenceEntity = await addDoc(collection(db, nomeTabela), dado);


        const savedData = { ...dado, id: referenceEntity.id }
        return savedData;
    }
}


async function get(nomeTabela) {
    const tableRef = collection(db, nomeTabela);

    const q = query(tableRef);

    const querySnapshot = await getDocs(q);

    const lista = []


    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        lista.push(data);
        console.log(doc.id, " => ", doc.data());
    });
    return lista;
}

async function getById(nomeTabela, id) {
    const docRef = doc(db, nomeTabela, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return new Error("Not found")
    }
}

async function remove(nomeTabela, id) {
    const dado = await deleteDoc(doc(db, nomeTabela, id));
    return {
        message: `${id} deleted`
    }

}

module.exports = {
    save,
    get,
    getById,
    remove
}