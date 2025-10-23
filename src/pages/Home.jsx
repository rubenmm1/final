import "./Home.css";
import Aside from "../components/Aside"
import logo from "../assets/logo.svg";

function Home() {
    return (
        <>
        <header className="main-header">
            <div className="header-left">
                ⚽ Mi App de Fútbol
            </div>
            <div className="header-right">
                <img src={logo} alt="Logo de la app" className="app-logo" />
            </div>
        </header>
            <Aside />
            <div>
                
            </div>
        </>
       
    )
}


export default Home;