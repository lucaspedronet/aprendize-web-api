import { FaAdjust, FaBars, FaSignOutAlt } from 'react-icons/fa';

import { Profile } from './Profile';

import {
  Container,
  LogoDiv,
  Logo,
  Logout,
  Tools,
  ToolsDestaque,
} from './styles';

type NavbarProps = {
  toggleTheme: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {

  return (
    <Container>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <button
        className="btn btn-outline"
        type="button"
        title="Abrir menu principal"
        data-bs-toggle="offcanvas"
      >
        <FaBars />
      </button>
      <Tools>
        <button
          type="button"
          title="Alterar tema padrão"
          className="btn btn-outline"
          onClick={toggleTheme}
        >
          <FaAdjust />
        </button>
        <ToolsDestaque>
          <Profile />

          <Logout>
            <button
              type="button"
              title="Sair do sistema"
              className="btn btn-outline"
              onClick={() => console.log('SinIg')}
            >
              <FaSignOutAlt />
            </button>
          </Logout>
        </ToolsDestaque>
      </Tools>
    </Container>
