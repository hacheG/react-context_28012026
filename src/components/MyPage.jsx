import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguaje = "es";

const traslations = {
    es:{
        headerTitle: "Mi aplicacion SIN Context",
        headerSubtitle: "Mi Cabecera",
        headerLight:"Claro",
        headerDark:"Oscuro",
        buttonLogin:"Iniciar Sesion",
        buttonLogout:"Cerrar Sesion",
        mainWelcome:"Bienvenid@ invitad@",
        mainHello:"Hola Usuari@",
        mainContext:"Mi contenido principal",
        footerTitle:"Mi pie de pagina"
    },
    en:{
        headerTitle:"My App WITHOUT Context",
        headerSubtitle:"My header",
        headerLight:"Light",
        headerDark:"Dark",
        buttonLogin:"Log in",
        buttonLogout:"Log out",
        mainWelcome:"Welcome guest",
        mainHello:"Hi there!",
        mainContext:"My main content",
        footerTitle:"My Footer"
    },
}

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [languaje, setLanguaje] = useState(traslations[initialLanguaje])

    const handleTheme = e => {
        console.log(e.target.value);
        if (e.target.value === "dark"){
            setTheme("dark")
        } else {
            setTheme(initialTheme)
        }
    };

    const handleLanguaje = e => {
        console.log((e.target.value))
        if (e.target.value === "en"){
            setLanguaje(traslations.en)
            // console.log("languaje",languaje);
            
        } else {
            setLanguaje(traslations.es)
            // console.log("languaje",languaje);

        }
        
    };
    // console.log("languaje",languaje);
    return(
        <div className="my-page">
            {/* {console.log(traslations.es)} */}
            <Header 
                theme={theme}
                handleTheme={handleTheme}

                languaje={languaje}
                handleLanguaje={handleLanguaje}
            />
            <Main 
                theme={theme}
                languaje={languaje}
                
            />
            <Footer 
                theme={theme}
                languaje={languaje}
                
            />
        </div>
    );
};

export default MyPage;