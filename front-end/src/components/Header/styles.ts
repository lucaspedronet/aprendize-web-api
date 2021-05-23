import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.layout.violet.dark};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    font-size: 1rem;
    color: ${({ theme }) => theme.layout.lightNeutrals.lighter};
    background: ${({ theme }) => theme.layout.orange.dark};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TitleLogo = styled.h1`
  color: ${({ theme }) => theme.layout.lightNeutrals.lighter};
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 120%;
  max-width: 450px;

  margin-left: 20px;
`;
