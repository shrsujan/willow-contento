import React from 'react';
import styled from 'styled-components';

import homeIcon from 'assets/icons/home.svg';
import settingsIcon from 'assets/icons/settings.svg';
import bookmarkIcon from 'assets/icons/bookmark_solid.svg';
import tagIcon from 'assets/icons/tag.svg';
import clockIcon from 'assets/icons/clock.svg';
import handpickedIcon from 'assets/icons/handpicked.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Wrapper = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ICONS = {
  home: {
    src: homeIcon,
    defaultAlt: 'Home',
  },
  settings: {
    src: settingsIcon,
    defaultAlt: 'Settings',
  },
  bookmark: {
    src: bookmarkIcon,
    defaultAlt: 'Bookmark',
  },
  tag: {
    src: tagIcon,
    defaultAlt: 'Tag',
  },
  clock: {
    src: clockIcon,
    defaultAlt: 'Clock',
  },
  handpicked: {
    src: handpickedIcon,
    defaultAlt: 'Handpicked',
  },
  twitter: {
    src: twitterIcon,
    defaultAlt: 'Twitter',
  },
};

interface INavIcon {
  alt?: string;
  iconName: keyof typeof ICONS;
}

const NavIcon: React.FC<INavIcon> = ({ iconName, alt }) => {
  const { src, defaultAlt } = ICONS[iconName];

  return (
    <Wrapper>
      <img src={src} alt={alt ?? defaultAlt} />
    </Wrapper>
  );
};

export default NavIcon;
