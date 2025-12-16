import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDP-TOqXAzR2lNyU-dkw_usuNT9dxCBItY",
    authDomain: "webcarros-b0fb9.firebaseapp.com",
    projectId: "webcarros-b0fb9",
    storageBucket: "webcarros-b0fb9.firebasestorage.app",
    messagingSenderId: "1083805818370",
    appId: "1:1083805818370:web:b1e38939ca80d8c26c911b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };