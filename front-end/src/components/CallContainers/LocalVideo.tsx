import React from 'react';
import styled from 'styled-components';
import { Video } from '../CallComponents';

export const LocalVideo = styled(Video)`
  position: relative;
  width: 100%;
  background: black;
  @media screen and (min-width: 936px) {
    position: absolute;
    border: 1px solid #38444d;
    bottom: 60px;
    right: 40px;
    border-radius: 5px;
    width: 300px;
    height: auto;
  }
`;
