import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "./firebase";

// criar escala
export const criarEscala = async (escala) => {
  try {
    await addDoc(
      collection(db, "escalas"),
      escala
    );

    console.log("Escala criada");
  } catch (error) {
    console.error(error);
  }
};