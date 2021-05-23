/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import { FaRegCopyright } from 'react-icons/fa';

import { Container, Top, Bottom, Logo, LogoLabs } from './styles';
import aprendizeIcon from '../../assets/Avatar.png';
// import logoSmall from '../../assets/Avatar.png';

export const Footer: React.FC = () => (
  <Container>
    <Top>
      <div>Sistema de Aprendizado</div>
      <div>Informação útil</div>
    </Top>
    <Bottom>
      <Logo>
        <img src={aprendizeIcon} alt="H" />
        Aprendize
      </Logo>
      <LogoLabs>
        <FaRegCopyright />
        {new Date().getFullYear()} - Aprendize
        <img src={aprendizeIcon} alt="H" />
      </LogoLabs>
    </Bottom>
  </Container>
);
