import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ArticleContext } from "../store/articleContext";
import Article from "../components/article";
import Back from "../components/backButton";

interface ParamType {
  articleId: string;
}

const Details = () => {
  const { articleId } = useParams<ParamType>();
  const data = useContext(ArticleContext);
  const { state } = data;

  const article = state.articles.find((item) => item.id === articleId);

  if (article !== undefined) {
    return (
      <div>
        <Article
          headline={article.headline}
          img={article.img}
          lead={article.lead}
          url={article.url}
        />
        <Back />
      </div>
    );
  } else {
    return (
      <div>
        <h2>That article doesn&apos;t exist</h2>
        <Back />
      </div>
    );
  }
};

export default Details;
