import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Layout from './components/Layout';
import Laliga from './pages/Laliga';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path='/laliga' element={<Laliga />}/>
      </Route>
    </Routes>
  );
}

export default App
