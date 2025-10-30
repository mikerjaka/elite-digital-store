// Importa las funciones necesarias del SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase (de tu proyecto)
const firebaseConfig = {
  apiKey: "AIzaSyDCn9XmUR7udV7tgNiOdhTEdpaSBKQBGp0",
  authDomain: "elite-digital-store.firebaseapp.com",
  projectId: "elite-digital-store",
  storageBucket: "elite-digital-store.firebasestorage.app",
  messagingSenderId: "822751216009",
  appId: "1:822751216009:web:0078a04d9e8ef8108fa158"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que usaremos
export const db = getFirestore(app);
export const auth = getAuth(app);
