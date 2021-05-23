import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
  position: relative;
  flex: 1;
  padding: 0.7rem;
  margin: 0.7rem;
  margin-top: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.layout.content.background};
  color: ${(props) => props.theme.layout.content.color};

  min-height: calc(100vh - 194px);

  // Sombra
  -webkit-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.content.shadowColor};
  -moz-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.content.shadowColor};
  box-shadow: 0px 3px 10px ${(props) => props.theme.layout.content.shadowColor};

  @media screen and (min-width: 750px) {
    padding: 1rem;
    margin: 1rem 2rem;
    margin-top: 0;
  }
`;
