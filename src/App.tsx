import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/fonts/fontStyles.css";
import "./App.css";
import CookieBar from "./assets/components/CookieBar";
import Impresum from "./assets/components/Impresum";
import DataPrivacy from "./assets/components/DataPrivacy";
import Home from "./assets/components/Home";
import SocialMedia from "./assets/components/SocialMedia";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impresum" element={<Impresum />} />
        <Route path="/data-privacy" element={<DataPrivacy />} />
      </Routes>
      <div className="footer">
        <Footer />
      </div>
      <CookieBar />
      <SocialMedia />
    </>
  );
}

export default App;
