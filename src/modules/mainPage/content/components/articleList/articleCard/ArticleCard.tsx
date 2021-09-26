import React from 'react';
import styled from 'styled-components';

import { IArticle } from 'response';

import Actions from './actions';

interface ICard {
  image: string;
}

const Card = styled.div<ICard>`
  display: flex;
  flex-direction: column;

  .image__container {
    height: 228px;
    max-width: 100%;
    border-radius: 12px;
    background-image: url(${(props) => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    > div {
      display: none;
    }

    &:hover {
      > div {
        display: flex;
      }
    }
  }

  .source {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 20px 0px 15px 0px;
    gap: 8px;

    img {
      width: 20px;
      height: 20px;
      border-radius: 16px;
      border: 1px solid ${(props) => props.theme.palette.blackBorder};
    }

    h4 {
      margin: unset;
      padding: unset;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.39px;
      text-transform: uppercase;
      color: ${(props) => props.theme.palette.normalText};
    }
  }

  h2 {
    margin: unset;
    padding: unset;
    font-size: 20px;
    text-align: left;
    font-weight: 900;
    line-height: 26px;
    color: ${(props) => props.theme.palette.headerText};
  }

  p {
    padding: unset;
    margin: 8px 0 0;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.palette.normalText};
  }
`;

interface IArticleCard {
  article: IArticle;
}

const ArticleCard: React.FC<IArticleCard> = ({ article }) => {
  const { icon, image, title, sourceTitle, description } = article;

  return (
    <Card image={image}>
      <div className="image__container">
        <Actions article={article} />
      </div>
      <div className="source">
        <img src={icon} alt={title} />
        <h4>{sourceTitle}</h4>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
};

export default ArticleCard;
