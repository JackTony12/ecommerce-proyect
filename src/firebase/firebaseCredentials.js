// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: import.meta.env.VITE_API_KEY,
 authDomain: 'e-commerce-60741.firebaseapp.com',
 projectId: 'e-commerce-60741',
 storageBucket: 'e-commerce-60741.appspot.com',
 messagingSenderId: '1070953979901',
 appId: '1:1070953979901:web:f06dd4af4f768cc2a10394',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export { auth, provider }
