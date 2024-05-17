import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/fonts/fontStyles.css";
import "./App.css";
import MainPicture from "./assets/components/MainPicture";
import Content from "./assets/components/Content";
import { contentData } from "./data/contentData";
import SocialMedia from "./assets/components/SocialMedia";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <MainPicture />
      </div>
      <div className="row">
        <Content data={contentData} />
      </div>
      <SocialMedia />
    </div>
  );
}

export default App;
