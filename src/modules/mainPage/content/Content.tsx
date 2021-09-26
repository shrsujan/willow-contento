import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import ForYou from './forYou';
import Bookmarks from './bookmarks';
import { ContentLayout } from 'layouts';
import { currentViewState } from '../store';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 75px;
`;

const Content: React.FC<{}> = () => {
  const currentView = useRecoilValue(currentViewState);

  return (
    <ContentLayout>
      <ContentWrapper>
        {currentView === 'forYou' && <ForYou />}
        {currentView === 'bookmarks' && <Bookmarks />}
      </ContentWrapper>
    </ContentLayout>
  );
};

export default Content;
