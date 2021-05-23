import React from 'react';
import { Button } from './AtomsButton';

type Props = { isSharing: boolean; onToggle: () => any };

export const AtomsShareScreen = ({ isSharing, onToggle }: Props) => {
  return <Button onClick={() => onToggle()}>{isSharing ? 'Parar transmissão de tela' : 'Compartilhar Tela'}</Button>;
};
