import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';

const LargeText = styled.div`
  font-size: 45px;
  font-weight: 500;
  line-height: 40px;
  margin-top: 15px;
`;

const SmallText = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const LogoContainer = ({ className }) => {
  return (
    <Link className={className} to="/">
      <Icon id="fa-cubes" size="70px" margin="0 10px 0 0" />
      <div>
        <LargeText>Блог</LargeText>
        <SmallText>Архитектура</SmallText>
      </div>
    </Link>
  );
};

export const Logo = styled(LogoContainer)`
  display: flex;
  margin-top: -14px;
  color: #000;
  text-decoration: none;
`;
