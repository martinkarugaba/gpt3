import React from "react";
import "./article.scss";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="article">
      <div className="article__image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="article__content">
        <div className="div">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
