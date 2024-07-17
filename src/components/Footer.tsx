import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <Link to="/impresum">Impresum</Link>

            <Link to="/data-privacy">Ochrana osobných údajov</Link>

            {/*       <a
              href="/cookie-settings"
              className="text-decoration-none text-dark mx-3"
            >
              Nastavenie cookies
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
