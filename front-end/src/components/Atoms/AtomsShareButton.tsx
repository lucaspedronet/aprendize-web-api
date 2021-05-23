import React from 'react';
import { Button } from './AtomsButton';

type Props = { isFullScreen: boolean; onToggle: () => any };

const AtomsFullScreenButton = ({ isFullScreen, onToggle }: Props) => {
  return <Button onClick={() => onToggle()}>{isFullScreen ? 'Fechar tela cheia' : 'Tela cheia'}</Button>;
};

export { AtomsFullScreenButton };
