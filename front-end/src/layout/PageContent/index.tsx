/* eslint-disable react/require-default-props */
import React from 'react';
import { Box, Container } from './styles';
import { TitleBar } from './TitleBar';

type PageContentProps = {
  goBack?: boolean;
  backTo?: string;
  title?: string;
  children: React.ReactNode;
};

export const PageContent: React.FC<PageContentProps> = ({
  goBack = false,
  backTo = '',
  title = '',
  children,
}: PageContentProps) => (
  <Container>
    <TitleBar goBack={goBack} backTo={backTo} title={title} />
    <Box>{children}</Box>
  </Container>
);
