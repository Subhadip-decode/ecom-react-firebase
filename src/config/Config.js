import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCmPJTeAiTruqlU9InO1j2K_hP_2n6ZrOg",
    authDomain: "iee-ecom.firebaseapp.com",
    projectId: "iee-ecom",
    storageBucket: "iee-ecom.appspot.com",
    messagingSenderId: "642407982275",
    appId: "1:642407982275:web:b1278bd4d1f9980e6fae76",
    measurementId: "G-PYCX97YXHN"
};

initializeApp(firebaseConfig);

const authz= getAuth();
const db = getFirestore();
const storages = getStorage();

export {authz,db,storages}