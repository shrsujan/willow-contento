import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { currentViewState } from '../store';

import { SidebarLayout } from 'layouts';
import { Button, NavIcon, NavHeader } from 'components';

const TopNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FilterNav = styled.div`
  width: 100%;
  display: flex;
  margin-top: 21px;
  flex-direction: column;
  padding-bottom: 40.5px;
  border-bottom: 1px ${(props) => props.theme.palette.boxShadow} solid;
`;

const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47.5px;
  color: ${(props) => props.theme.palette.headerText};

  em {
    font-style: normal;
    font-weight: 600;
    margin-bottom: 4px;
  }
`;

const Sidebar: React.FC<{}> = () => {
  const [currentView, setCurrentView] = useRecoilState(currentViewState);
  const resetCurrentView = useResetRecoilState(currentViewState);
  const { pathname } = useLocation();

  const onViewChange = (view: typeof currentView) => {
    setCurrentView(view);
  };

  useEffect(() => {
    resetCurrentView();
  }, [resetCurrentView, pathname]);

  return (
    <SidebarLayout>
      <TopNav>
        <Button
          alignContent="left"
          fullWidth={true}
          onClick={() => onViewChange('forYou')}
          className={currentView === 'forYou' ? 'active' : ''}
        >
          <NavIcon iconName="home" alt="For you" />
          For you
        </Button>
        <Button alignContent="left" fullWidth={true}>
          <NavIcon iconName="settings" alt="Personalize" />
          Personalize
        </Button>
      </TopNav>

      <FilterNav>
        <NavHeader>Filters</NavHeader>
        <Button
          alignContent="left"
          fullWidth={true}
          onClick={() => onViewChange('bookmarks')}
          className={currentView === 'bookmarks' ? 'active' : ''}
        >
          <NavIcon iconName="bookmark" alt="Saved for later" />
          Saved for later
        </Button>
        <Button alignContent="left" fullWidth={true}>
          <NavIcon iconName="tag" alt="Topics" />
          Topics
        </Button>
        <Button alignContent="left" fullWidth={true}>
          <NavIcon iconName="clock" alt="Latest" />
          Latest
        </Button>
        <Button alignContent="left" fullWidth={true}>
          <NavIcon iconName="handpicked" alt="Handpicked" />
          Handpicked
        </Button>
        <Button alignContent="left" fullWidth={true}>
          <NavIcon iconName="twitter" alt="Influencers" />
          Influencers
        </Button>
      </FilterNav>

      <SidebarFooter>
        <em>Schedule 2 more articles</em>
        To fill this week.
      </SidebarFooter>
    </SidebarLayout>
  );
};

export default Sidebar;
