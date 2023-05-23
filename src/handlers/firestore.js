import { db } from "../lib/firebase.config"
import { setDoc, doc, serverTimestamp, collection, getDocs } from "firebase/firestore"

const FireStore = {
    readDocs: (...args) => {
        let docs = [];
        const ref = collection(db, "stocks");
        return new Promise(async resolve => {
            try {
                const snapshots = await getDocs(ref);
                snapshots.forEach(doc => {
                    const d = {...doc.data()}
                    docs.push(d)
                })
                resolve(docs)
            } catch (error) {
                console.error(error)
            }
        })
    },
    writeDoc: (...args) => {
        const [inputs, collection_name] = args
        return new Promise(async resolve => {
            const randomIndex = Math.floor(Math.random() * 1000000000)
            try {
                const docRef = doc(db, collection_name, `${randomIndex}`);
                await setDoc(docRef, { title: inputs.title, path: inputs.path, createdAt: serverTimestamp()});
                resolve('new doc is successfully added')
            } catch (error) {
                console.error(error);
            }
        })
    }
}

export default FireStore