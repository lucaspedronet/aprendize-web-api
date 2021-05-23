import React from 'react';
import logoImag from '../../assets/Avatar.png';

import { Container, Content, TitleLogo } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <div>
        <img src={logoImag} alt="Apredize" />
        <TitleLogo>Aprendize</TitleLogo>
      </div>
      <button type="button"> Criar sala</button>
    </Content>
  </Container>
);

export { Header };
