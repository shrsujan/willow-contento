import styled from 'styled-components';

interface IButton {
  variant?: 'post';
  fullWidth?: boolean;
  alignContent?: 'left' | 'right' | 'center';
}

const Button = styled.button<IButton>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  height: 40px;
  border: none;
  display: flex;
  cursor: pointer;
  padding: 12px 19px;
  align-items: center;
  justify-content: ${(props) => {
    switch (props.alignContent) {
      case 'left':
        return 'flex-start';

      case 'right':
        return 'flex-end';

      case 'center':
      default:
        return 'center';
    }
  }};
  ${(props) => {
    switch (props.variant) {
      case 'post':
        return `
          font-weight: 600;
          border-radius: 28px;
          color: ${props.theme.palette.headerText};
          background-color: ${props.theme.palette.white};
        `;

      default:
        return `
          font-weight: normal;
          border-radius: 8px;
          background-color: transparent;
          color: ${props.theme.palette.normalText};

          &:hover {
            font-weight: 600;
            color: ${props.theme.palette.headerText};
            background-color: ${props.theme.palette.linkBg};
          }
        `;
    }
  }};
`;

export default Button;
