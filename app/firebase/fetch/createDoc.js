import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config';

export const createDoc = async ( collectionName, data ) => {
    try {
        const docRef = await addDoc(collection(db, collectionName),data);
        return docRef.id;
    } catch (e) {
        return false; 
    }
};