import "./Home.css";
import Aside from "../components/Aside"
import logo from "../assets/logo.svg";

function Home() {
    return (
        <>
        <header className="main-header">
            <div className="header-left">
                ⚽ FUTAPP
            </div>
            <div className="header-right">
                <img src={logo} alt="Logo de la app" className="app-logo" />
            </div>
        </header>
            <Aside />
            <div id="contenido">
                BIENVENIDO A FUTAPP, LA APLICACIÓN CON TODOS LOS RESULTADOS Y CLASIFICACIONES DE LAS GRANDES COMPETICIONES DE EUROPA
            </div>
        </>
       
    )
}


export default Home;