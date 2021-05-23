import React from 'react';
import logoImag from '../../assets/Avatar.png';

import { Container, Content } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImag} alt="Apredize" />
      <button type="button"> Criar sala</button>
    </Content>
  </Container>
);

export { Header };
