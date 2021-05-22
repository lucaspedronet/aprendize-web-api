import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.layout.body.background};
    color: ${(props) => props.theme.layout.body.color};
  }
  body, input, select,  button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #f7f7f7;
  flex: 1;

  > div {
    display: flex;
  }
`;

export const Content = styled.div`
  position: relative;
  flex: 1;
  margin-right: auto;
  padding: 1.6rem;

  @media screen and (max-width: 500px) {
    padding: 0.5rem;
  }
`;
