import React from 'react';
import { PageContent } from '../../layout/PageContent';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <PageContent title="Dashboard">
    <Container>
      <p>Bem-vindo</p>
    </Container>
  </PageContent>
);

export { Dashboard };
