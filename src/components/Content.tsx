import React from "react";

interface ContentProps {
  data: {
    headline: string;
    paragraph: string;
  }[];
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="container text-center">
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-lg-8 col-9 mx-auto mb-4">
            <h1 className="headline-1 mb-3">{item.headline}</h1>
            <article className="text-1 mb-3">{item.paragraph}</article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
