// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA4Uj8R95n-_RIVNVOgHLIl2R-7TqUzVg8",
//   authDomain: "bistro-bos-90db2.firebaseapp.com",
//   projectId: "bistro-bos-90db2",
//   storageBucket: "bistro-bos-90db2.appspot.com",
//   messagingSenderId: "446515396473",
//   appId: "1:446515396473:web:dc6351e1365a1efa19f9a8",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
