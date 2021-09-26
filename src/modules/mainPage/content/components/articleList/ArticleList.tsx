import React from 'react';
import styled from 'styled-components';

import { IArticle } from 'response';

import ArticleCard from './articleCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(342px, 2fr));
  grid-gap: 82px 24px;
`;

interface IArticleList {
  articles: IArticle[];
}

const ArticleList: React.FC<IArticleList> = ({ articles }) => {
  return (
    <Grid>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Grid>
  );
};

export default ArticleList;
