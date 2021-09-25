import React from 'react';
import styled from 'styled-components';

import plusIcon from 'assets/icons/plus.svg';
import defaultUser from 'assets/users/default.png';

import RoundButton from 'components/roundButton';

const UserNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  img {
    &.icon {
      width: 16px;
      height: 16px;
      object-fit: contain;
    }

    &.profile {
      object-fit: cover;
    }
  }
`;

const UserNavbar: React.FC<{}> = () => {
  return (
    <UserNav>
      <RoundButton variant="success">
        <img src={plusIcon} className="icon" alt="New Post" />
      </RoundButton>
      <RoundButton variant="profile">
        <img src={defaultUser} className="profile" alt="Profile" />
      </RoundButton>
    </UserNav>
  );
};

export default UserNavbar;
