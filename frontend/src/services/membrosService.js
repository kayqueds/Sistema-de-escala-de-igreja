import { db } from "./firebase";
import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";



// criar membro
export const criarMembro = async (novoMembro) => {
  try {
    const docRef = await addDoc(collection(db, "membros"), novoMembro);
    return docRef.id;
  } catch (error) {
    console.error("Erro ao criar membro:", error);
  }
};


// ler membros
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

// apagar membros
export const deletarMembro = async (id) => {
  try {
    await deleteDoc(doc(db, "membros", id));
    console.log("Membro deletado com sucesso");
  } catch (error) {
    console.error("Erro ao deletar:", error);
  }
};

