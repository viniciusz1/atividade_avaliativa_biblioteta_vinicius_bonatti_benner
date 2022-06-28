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
const firebaseConfig = {
    apiKey: "AIzaSyDdCIWYJg4nMgQWbABwWHIEXwCHYmUiwik",
    authDomain: "atvbiblioteca.firebaseapp.com",
    projectId: "atvbiblioteca",
    storageBucket: "atvbiblioteca.appspot.com",
    messagingSenderId: "61615691749",
    appId: "1:61615691749:web:6ced927423b33754f8810c",
    measurementId: "G-C0VHPF86D5"
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