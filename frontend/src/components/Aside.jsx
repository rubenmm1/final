import { Link } from 'react-router-dom';
import './Aside.css';

function Aside() {
  return (
    <aside>
      <nav className="sidebar">
        <Link to="/">Inicio</Link>
        <Link to="/laliga">LaLiga</Link>
        <Link to="/premier-league">Premier League</Link>
        <Link to="/bundesliga">Bundesliga</Link>
        <Link to="/serie-a">Serie A</Link>
        <Link to="/ligue-1">Ligue 1</Link>
        <Link to="/champions-league">Champions League</Link>
        <Link to="/europa-league">Europa League</Link>
      </nav>
    </aside>
  );
}

export default Aside;