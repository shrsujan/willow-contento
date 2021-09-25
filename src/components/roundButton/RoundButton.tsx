import styled from 'styled-components';

interface IRoundButton {
  variant?: 'success' | 'profile';
}

const RoundButton = styled.button<IRoundButton>`
  width: 40px;
  height: 40px;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'success':
        return props.theme.palette.success;

      case 'profile':
      default:
        return 'none';
    }
  }};
  overflow: ${(props) => (props.variant === 'profile' ? 'hidden' : 'unset')};
`;

export default RoundButton;
