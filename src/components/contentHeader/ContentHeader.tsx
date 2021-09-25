import React from 'react';
import styled from 'styled-components';

import tagIcon from 'assets/icons/tag_white.svg';

const ICONS = {
  tag: {
    src: tagIcon,
    defaultAlt: 'Tag',
  },
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.palette.info};

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

const Header = styled.h1`
  margin: unset;
  padding: unset;
  text-transform: capitalize;
  letter-spacing: -0.75px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.headerText};
  font-size: 25px;
`;

interface IContentHeader {
  title: string;
  iconName?: keyof typeof ICONS;
}

const ContentHeader: React.FC<IContentHeader> = ({ title, iconName }) => {
  return (
    <Wrapper>
      {!!iconName && (
        <IconWrapper>
          <img src={ICONS[iconName].src} alt={title} />
        </IconWrapper>
      )}
      <Header>{title}</Header>
    </Wrapper>
  );
};

export default ContentHeader;
