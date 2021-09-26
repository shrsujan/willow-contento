import React from 'react';
import { useRecoilValue } from 'recoil';

import ROUTES from 'constants/routes';
import {
  todaysPicksState,
  employeeBrandingState,
} from 'modules/mainPage/store';

import { ContentHeader } from 'components';
import { Section, SeeMore, ArticleList } from '../components';

const ForYou: React.FC<{}> = () => {
  const todaysPicks = useRecoilValue(todaysPicksState);
  const employeeBranding = useRecoilValue(employeeBrandingState);

  return (
    <>
      <Section>
        <div className="section-header">
          <ContentHeader title="Today's Picks" />
        </div>
        <ArticleList articles={todaysPicks} />
      </Section>
      <Section>
        <div className="section-header">
          <ContentHeader iconName="tag" title="Employee Branding" />
          <SeeMore to={ROUTES.MAIN_PAGE} />
        </div>
        <ArticleList articles={employeeBranding} />
      </Section>
    </>
  );
};

export default ForYou;
