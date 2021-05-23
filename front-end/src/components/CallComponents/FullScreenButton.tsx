import React from 'react';
import { Button } from './VideoButton';

type Props = { isFullScreen: boolean; onToggle: () => any };

export const FullScreenButton = ({ isFullScreen, onToggle }: Props) => {
  return <Button onClick={() => onToggle()}>{isFullScreen ? 'Fechar tela cheia' : 'Tela cheia'}</Button>;
};
