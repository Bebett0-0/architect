import styled from 'styled-components';

const ButtonContainer = ({ children, className, ...props }) => {
    return (
        <button className={className} {...props}>
            {children}
        </button>
    );
};

export const Button = styled(ButtonContainer)`
    height: 40px;
    width: ${({ width }) => width};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #bdbdbd;
    border: 2px solid #030303;

    &:hover {
        cursor: pointer;
    }
`;
