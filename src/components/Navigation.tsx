import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Domov
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/impresum" className="nav-link">
            Impresum
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/data-privacy" className="nav-link">
            Ochrana osobných údajov
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
