import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const buscarMembros = async () => {
  try {
    const snapshot = await getDocs(collection(db, "membros"));

    const membros = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    return membros;
  } catch (error) {
    console.error("Erro ao buscar membros:", error);
    return [];
  }
};