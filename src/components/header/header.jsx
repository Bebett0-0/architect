import styled from 'styled-components';
import { Logo } from './components/logo/Logo';
import { ControlPanel } from './components/control-panel/control-panel';

const Description = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>
      Конструктивизм
      <br /> Эстетика
      <br /> Пространство
    </Description>
    <ControlPanel />
  </header>
);
export const Header = styled(HeaderContainer)`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 1000px;
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0px 3px 20px grey;
  background-color: white;
`;
