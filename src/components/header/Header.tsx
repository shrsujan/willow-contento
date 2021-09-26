import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ROUTES from 'constants/routes';
import { Logo, Navbar, UserNavbar } from 'components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 72px;
  background: ${(props) => props.theme.palette.white} 0% 0% no-repeat
    padding-box;
  box-shadow: 0px 1px 2px ${(props) => props.theme.palette.boxShadow};
  opacity: 1;
  display: flex;
  padding: 16px 32px;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9;
`;

const Header: React.FC<{}> = () => {
  return (
    <HeaderWrapper>
      <Link to={ROUTES.MAIN_PAGE}>
        <Logo />
      </Link>
      <Navbar />
      <UserNavbar />
    </HeaderWrapper>
  );
};

export default Header;
