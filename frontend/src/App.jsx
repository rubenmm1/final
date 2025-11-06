import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './components/Layout';
import Laliga from './pages/Laliga';
import Premier from './pages/Premier';
import Competiciones from './pages/Competiciones';
import Resultados from './pages/Resultados';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/competiciones' element={<Competiciones />}/>
      <Route element={<Layout />}>
        <Route path='/laliga' element={<Laliga />}/>
        <Route path='/premier-league' element={<Premier />}/>
        <Route path='/resultados' element={<Resultados />}/>
      </Route>
    </Routes>
  );
}

export default App
