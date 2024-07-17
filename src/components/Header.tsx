import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="navigation-container">
        <Navigation />
      </div>
    </header>
  );
}
