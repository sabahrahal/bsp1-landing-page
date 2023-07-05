import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

export const getAllData = async (collectionName) => {
  try {
    const resp = await getDocs(collection(db, collectionName));
    if(!resp) throw new Error("HTTP ERROR", resp); 
    const newData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return newData; 
  } catch (error) {
    console.error(error)
  }
  return newData;
};
