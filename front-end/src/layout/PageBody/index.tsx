import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

interface IPageBodyProps {
  children: React.ReactNode;
}
export const PageBody: React.FC<IPageBodyProps> = ({ children }: IPageBodyProps) => {
  console.log('');
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
