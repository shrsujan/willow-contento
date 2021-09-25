import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ROUTES from 'constants/routes';
import chevronRightIcon from 'assets/icons/chevron_right.svg';
import { todaysPicks, employeeBranding } from 'mocks/articles';

import ArticleList from './articleList';
import { ContentLayout } from 'layouts';
import { ContentHeader } from 'components';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;

  .section-header {
    display: flex;
    margin-bottom: 56px;
    justify-content: space-between;
  }
`;

const SeeMore = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    text-decoration: none;
    letter-spacing: -0.32px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.palette.info};

    img {
      margin-top: -1px;
    }
  }
`;

const Content: React.FC<{}> = () => {
  return (
    <ContentLayout>
      <ContentWrapper>
        <Section>
          <div className="section-header">
            <ContentHeader title="Today's Picks" />
          </div>
          <ArticleList articles={todaysPicks} />
        </Section>
        <Section>
          <div className="section-header">
            <ContentHeader iconName="tag" title="Employee Branding" />
            <SeeMore>
              <Link to={ROUTES.MAIN_PAGE}>
                See more
                <img src={chevronRightIcon} alt="See more" />
              </Link>
            </SeeMore>
          </div>
          <ArticleList articles={employeeBranding} />
        </Section>
      </ContentWrapper>
    </ContentLayout>
  );
};

export default Content;
