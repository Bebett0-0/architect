import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from '../../../icon/Icon';
import { Button } from '../../../button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserRole } from '../../../../selectors';
import { selectUserLogin } from '../../../../selectors';
import { selectUserSession } from '../../../../selectors';
import { ROLE } from '../../../../constants';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const StyledIcon = styled.div`
    &:hover {
        cursor: pointer;
    }
`;

const UserName = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 18px;
    font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const USER_ROLE = useSelector(selectUserRole);
    const USER_LOGIN = useSelector(selectUserLogin);
    const SESSION = useSelector(selectUserSession);
    return (
        <div className={className}>
            <RightAligned>
                {USER_ROLE === ROLE.GUEST ? (
                    <Button width="100px">
                        <Link to="/login">Войти</Link>
                    </Button>
                ) : (
                    <>
                        <UserName>{USER_LOGIN}</UserName>
                        <StyledIcon>
                            <Icon
                                id="fa fa-sign-out"
                                size="24px"
                                margin="0 0 0 10px"
                                aria-hidden="true"
                                onClick={() => dispatch(logout(SESSION))}
                            />
                        </StyledIcon>
                    </>
                )}
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
