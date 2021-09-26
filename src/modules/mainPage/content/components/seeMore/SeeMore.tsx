import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import chevronRightIcon from 'assets/icons/chevron_right.svg';

const Wrapper = styled.div`
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

interface ISeeMore {
  to: string;
}

const SeeMore: React.FC<ISeeMore> = ({ to }) => {
  return (
    <Wrapper>
      <Link to={to}>
        See more
        <img src={chevronRightIcon} alt="See more" />
      </Link>
    </Wrapper>
  );
};

export default SeeMore;
