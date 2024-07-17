import MainPicture from "./MainPicture";
import Content from "./Content";
import { contentData } from "../data/contentData";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <MainPicture />
      </div>
      <div className="row">
        <Content data={contentData} />
      </div>
    </div>
  );
}
