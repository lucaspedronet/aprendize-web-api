import React from 'react';
import styled from 'styled-components';
import { Video } from '../CallComponents';

export const RemoteVideo = styled(Video)`
  background: black;
  width: 100%;
  height: 100%;
  background: black;
  @media screen and (max-width: 936px) {
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    height: auto;
    border: none;
  }
`;
