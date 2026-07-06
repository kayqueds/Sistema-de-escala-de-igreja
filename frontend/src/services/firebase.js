// Importações dos módulos necessários do Firebase
import { initializeApp } from 'firebase/app';  // Para inicializar o app Firebase
import { getFirestore } from 'firebase/firestore';  // Para configurar o Firestore

// Configuração do Firebase (substitua pelos valores do seu projeto no console Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAIH2mpwGHxrFYZpGG01KX6nu3XJ53RXv0",
  authDomain: "sistema-de-escala-6d188.firebaseapp.com",
  projectId: "sistema-de-escala-6d188",
  storageBucket: "sistema-de-escala-6d188.firebasestorage.app",
  messagingSenderId: "856596668848",
  appId: "1:856596668848:web:7980557e6d8a493ee5f675",
  measurementId: "G-0BGETQ4G2S"
};

// Inicialização do app Firebase com a configuração acima
const app = initializeApp(firebaseConfig);

// Inicialização do Firestore (banco de dados)
const db = getFirestore(app);

// Exportação da instância do Firestore para uso em outros arquivos
export { db };