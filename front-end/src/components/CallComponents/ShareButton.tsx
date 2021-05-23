import React from 'react';
import { Button } from './VideoButton';

type Props = { isSharing: boolean; onToggle: () => any };

export const ShareScreen = ({ isSharing, onToggle }: Props) => {
  return <Button onClick={() => onToggle()}>{isSharing ? 'Parar transmissão de tela' : 'Compartilhar Tela'}</Button>;
};
