import styled from 'styled-components';

import logo from 'assets/logo.svg';

const LogoWrapper = styled.div`
  width: 41px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Logo: React.FC<{}> = () => {
  return (
    <LogoWrapper>
      <img src={logo} alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
