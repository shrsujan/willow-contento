import React from 'react';
import styled from 'styled-components';

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
  flex-direction: column;
  margin-top: 21px;
  padding-bottom: 40.5px;
  border-bottom: 1px ${(props) => props.theme.palette.boxShadow} solid;

  h3 {
    font-size: 16px;
    color: #bcbcbc;
    font-weight: 600;
    letter-spacing: 0.52px;
    margin-bottom: 12px;
  }
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
  return (
    <SidebarLayout>
      <TopNav>
        <Button alignContent="left" fullWidth={true}>
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
        <Button alignContent="left" fullWidth={true}>
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
