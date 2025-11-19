import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './components/Layout';
import Laliga from './pages/Laliga';
import Premier from './pages/Premier';
import Bundesliga from './pages/Bundesliga';
import Serie from './pages/Serie';
import Ligue from './pages/Ligue';
import Competiciones from './pages/Competiciones';
import Resultados from './pages/Resultados';
import Champions from './pages/Champions';
import Europa from './pages/Europa';
import Clasificacion from './pages/Clasificacion';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/competiciones' element={<Competiciones />}/>
      <Route element={<Layout />}>
        <Route path='/laliga' element={<Laliga />}/>
        <Route path='/premier-league' element={<Premier />}/>
        <Route path='/serie-a' element={<Serie />}/>
        <Route path='/bundesliga' element={<Bundesliga />}/>
        <Route path='/ligue-1' element={<Ligue />}/>
        <Route path='/champions-league' element={<Champions />}/>
        <Route path='/europa-league' element={<Europa />}/>
        <Route path='/resultados/:leagueId' element={<Resultados />}/>
        <Route path="/clasificacion/:leagueSlug" element={<Clasificacion />} />
      </Route>
    </Routes>
  );
}

export default App
