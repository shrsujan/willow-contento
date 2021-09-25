import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import ROUTES from 'constants/routes';

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 17px;

  a {
    flex: 1;
    display: flex;
    color: ${(props) => props.theme.palette.fadedText};
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    border-radius: 20px;
    padding: 13px 20px;

    &:hover {
      background: ${(props) => props.theme.palette.linkHoverBg} 0% 0% no-repeat
        padding-box;
      color: ${(props) => props.theme.palette.headerText};
    }
  }

  .active {
    background: ${(props) => props.theme.palette.linkHoverBg} 0% 0% no-repeat
      padding-box;
    color: ${(props) => props.theme.palette.headerText};
  }
`;

const Navbar: React.FC<{}> = () => {
  return (
    <Nav>
      <NavLink to={ROUTES.SCHEDULE} activeClassName="active">
        Schedule
      </NavLink>
      <NavLink to={ROUTES.CONTENT} activeClassName="active">
        Content
      </NavLink>
      <NavLink to={ROUTES.GROW} activeClassName="active">
        Grow
      </NavLink>
      <NavLink to={ROUTES.REPORT} activeClassName="active">
        Report
      </NavLink>
    </Nav>
  );
};
export default Navbar;
