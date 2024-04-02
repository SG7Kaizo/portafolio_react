import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDownloadURL, ref } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA-s_M0VilThfJIodaI8cblEu__q4TZpx8",
    authDomain: "portafolio-react-441b0.firebaseapp.com",
    projectId: "portafolio-react-441b0",
    storageBucket: "portafolio-react-441b0.appspot.com",
    messagingSenderId: "824310464330",
    appId: "1:824310464330:web:525c23c1a67342718b0bb3",
    measurementId: "G-B4LL2V72HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storageRef = getStorage(app); // Renombré la variable a storageRef para evitar conflictos

// Función para obtener la URL y detalles de una imagen en Firebase Storage
export async function getImageDetails(imagePath) {
    try {
        // Referencia a la imagen en el storage
        const imageRef = ref(storageRef, imagePath);
        // Obtener la URL de descarga de la imagen
        const downloadURL = await getDownloadURL(imageRef);

        return downloadURL;

    } catch (error) {
        // Manejar errores
        console.error("Error al obtener la URL y detalles de la imagen:", error);
        throw error;
    }
}

