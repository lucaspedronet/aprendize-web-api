import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: center;


  background: ${({ theme }) => theme.layout.lightNeutrals.light};
`;

export const Header = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  max-width: 1500px;
  min-width: 1100px;

  min-height: 400px;

  margin-top: -150px;
  border-radius: 15px;
  background: ${({ theme }) => theme.layout.lightNeutrals.lighter};
`;

export const ContainerContent = styled.div`
  height: 500px;

  background: ${({ theme }) => theme.layout.lightNeutrals.lighter};

  div {
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; */

  }
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
`;

export const Content = styled.div``;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
`;

export const NameText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 120%;

  color: #2D2C36;
  margin-right: 15px;
`;

export const Evaluation = styled.div``;

export const Right = styled.div``;

export const Price = styled.p``;

export const AgendarAula = styled.div``;

