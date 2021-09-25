import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import bookmarkIcon from 'assets/icons/bookmark.svg';
import moreMenuIcon from 'assets/icons/more_menu.svg';
import thumbsdownIcon from 'assets/icons/thumbsdown.svg';

import { Button, RoundButton } from 'components';

const ICONS = {
  thumbsdown: {
    src: thumbsdownIcon,
  },
  bookmark: {
    src: bookmarkIcon,
  },
  moreMenu: {
    src: moreMenuIcon,
  },
};

const Wrapper = styled.div`
  display: flex;
  width: inherit;
  height: inherit;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  position: relative;

  .overlay {
    width: inherit;
    height: inherit;
    border-radius: 12px;
    background-color: ${(props) => props.theme.palette.black};
    opacity: 0.3;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .content {
    z-index: 3;

    .action-items {
      position: absolute;
      top: 8px;
      right: 12px;
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 8px;
    }
  }

  .tooltip {
    background-color: ${(props) => props.theme.palette.headerText};
    box-shadow: 0px 6px 16px ${(props) => props.theme.palette.tooltipBg};
    border-radius: 8px;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.palette.white};
  }
`;

const ActionButton = styled(RoundButton)`
  background: transparent;
  border: 1px solid ${(props) => props.theme.palette.white};
  backdrop-filter: blur(9px);

  &:hover {
    backdrop-filter: blur(50px);
  }

  img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }
`;

interface IActionItem {
  title: string;
  iconName: keyof typeof ICONS;
}

const ActionItem: React.FC<IActionItem> = ({ title, iconName }) => {
  const { src } = ICONS[iconName];

  return (
    <>
      <ActionButton data-tip data-for={title}>
        <img src={src} alt={title} />
      </ActionButton>
      <ReactTooltip id={title} place="top" effect="solid" className="tooltip">
        {title}
      </ReactTooltip>
    </>
  );
};

const Actions: React.FC<{}> = () => {
  return (
    <Wrapper>
      <div className="overlay" />
      <div className="content">
        <Button variant="post">Post now</Button>
        <div className="action-items">
          <ActionItem iconName="thumbsdown" title="Dislike" />
          <ActionItem iconName="bookmark" title="Save for later" />
          <ActionItem iconName="moreMenu" title="View details" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Actions;
