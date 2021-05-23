import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: -150px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    min-width: 500px;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: ${({ theme }) => theme.layout.lightNeutrals.darker};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${({ theme }) => theme.layout.orange.dark};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${({ theme }) => theme.layout.lightNeutrals.light};
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ListTeacher = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin-top: 100px;
`;

export const LinkCard = styled.a`
  background: ${({ theme }) => theme.layout.orange.lighter};
  border-radius: 5px;
  border-color: ${({ theme }) => theme.layout.darkNeutrals.light};
  border-width: 50px;
  max-width: 100%;
  max-height: 300px;
  padding: 24px;
  margin: 20px;

  align-items: center;
  justify-content: center;

  display: block;
  display: flex;

  text-decoration: none;

  transition: filter 0.2s;
  transition: transform 0.2s;

  &:hover {
    filter: brightness(0.9);
    transform: translateX(10px);
  }

  img {
    width: 154px;
    height: 154px;
    border-radius: 16.4px;

    margin-right: 18px;
  }
`;

export const CardContent = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  margin: 0;
  div {
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const NameText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 23px;
  line-height: 120%;

  color: #3f3d4a;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 2px 0px;
`;

export const ContainerEvaluation = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  margin: 0;
  height: 100%;
`;

export const Hour = styled.p`
  color: #3f3d4a;
`;

export const Evaluation = styled.strong`
  color: #575666;
  margin: 0px 6px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 120%;
`;

export const Description = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;

  color: #b3b2bd;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 2px 0px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Favorite = styled.button`
  margin: 0;
  padding: 0;

  text-decoration: none;
  border: 0 transparent;
`;
