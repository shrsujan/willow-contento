import React from 'react';
import { useRecoilValue } from 'recoil';

import { bookmarksState } from 'modules/mainPage/store';

import { ContentHeader } from 'components';
import { Section, ArticleList } from '../components';

const Bookmarks: React.FC<{}> = () => {
  const bookmarks = useRecoilValue(bookmarksState);

  return (
    <>
      <Section>
        <div className="section-header">
          <ContentHeader title="Saved articles" />
        </div>
        <ArticleList articles={bookmarks} />
      </Section>
    </>
  );
};

export default Bookmarks;
