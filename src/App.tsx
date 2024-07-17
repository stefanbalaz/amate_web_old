import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./fonts/fontStyles.css";
import "./App.css";
import CookieBar from "./components/CookieBar";
import Impresum from "./components/Impresum";
import DataPrivacy from "./components/DataPrivacy";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impresum" element={<Impresum />} />
        <Route path="/data-privacy" element={<DataPrivacy />} />
      </Routes>
      <Footer />
      <CookieBar />
      <SocialMedia />
    </>
  );
}

export default App;
