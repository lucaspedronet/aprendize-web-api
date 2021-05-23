import React from 'react';
import { Container } from './styles';

interface IPageBodyProps {
  children: React.ReactNode;
}
export const PageBody: React.FC<IPageBodyProps> = ({ children }: IPageBodyProps) => {
  console.log('');
  return <Container>{children}</Container>;
};
