export default function Footer() {
  return (
    <footer className="py-3">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <a href="/impresum" className="text-decoration-none text-dark mx-3">
              Impresum
            </a>
            <a
              href="/data-privacy"
              className="text-decoration-none text-dark mx-3"
            >
              Ochrana osobných údajov
            </a>
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
