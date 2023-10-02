import { db } from "./Firebase";
import {
  doc,
  updateDoc,
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  addDoc,
} from "firebase/firestore/lite";

export const addDocument = async (
  collectionName: string,
  data: Record<string, any>
) => {
  try {
    const col = collection(db, collectionName);
    const docRef = await addDoc(col, data);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};

export const updateDocument = async (
  collectionName: string,
  docId: string,
  data: Record<string, any>
) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    console.log("Document updated successfully");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error;
  }
};

export const getDocument = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

export const getDocuments = async (collectionName: string) => {
  try {
    const col = collection(db, collectionName);
    const docSnapshot = await getDocs(col);

    if (docSnapshot) {
      const documents = docSnapshot.docs.map((doc) => doc.data());
      return documents;
    } else {
      console.log("No documents found in the collection.");
      return [];
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    throw error;
  }
};

export const deleteDocument = async (collectionName: string, docId: string) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted successfully");
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error;
  }
};
