import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import { Article } from "../../components";
import "./blog.scss";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog__sectionHeading">
        <h2 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h2>
      </div>
      <div className="blog__articlesContainer">
        <div className="blog__topArticle">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="blog__moreArticles">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
