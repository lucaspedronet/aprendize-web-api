import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  border: 0;
  background: #e86f4a;
  font-size: 17px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  &:last-child {
    margin: 0px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background: #f78057;
  }
`;
