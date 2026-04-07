import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  color: #000;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 5px;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={className}>
      <RightAligned>
        <StyledLink to="/login">Войти</StyledLink>
      </RightAligned>
      <RightAligned>
        <Link to="/users">
          <Icon
            id="fa-users"
            size="24px"
            margin="10px 0 0 0"
            aria-hidden="true"
          />
        </Link>
        <Link to="/post">
          <Icon
            id="fa fa-quora"
            size="24px"
            margin="10px 0 0 16px"
            aria-hidden="true"
          />
        </Link>
        <Link onClick={() => navigate(-1)}>
          <Icon
            id="fa fa-angle-double-left"
            size="24px"
            margin="10px 0 0 16px"
            aria-hidden="true"
          />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
