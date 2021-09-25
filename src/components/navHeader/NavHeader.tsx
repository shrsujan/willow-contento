import styled from 'styled-components';

const NavHeader = styled.h3`
  margin: unset;
  padding: unset;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.52px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.fadedHeaderText};
  font-size: 16px;
`;

export default NavHeader;
