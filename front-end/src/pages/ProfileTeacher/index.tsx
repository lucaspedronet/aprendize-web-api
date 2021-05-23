/* eslint-disable object-curly-newline */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import { HiShare } from 'react-icons/hi';
import { Container, Header, Avatar, Content, ContainerTop, NameText, Evaluation, Right, Price, AgendarAula, ContainerContent } from './styles';

import avatarProfile from '../../assets/Avatar-03.svg';

const ProfileTeacher: React.FC = () => {
  const { params } = useRouteMatch();
  console.log(params);
  return (
    <Container>
      <Header>
        <div></div>
        <Avatar src={avatarProfile} />
        <Content>
          <div>
            <ContainerTop>
              <NameText>Beatriz Amorim Silva</NameText>
              <BsFillHeartFill size={28} color="#F78057" />
              <HiShare size={28} />
            </ContainerTop>
            <Evaluation>
              <strong>Embaixador Aprendize</strong>
            </Evaluation>
          </div>
        </Content>
        <Right>
          <Price>R$ 90,00/h</Price>
          <AgendarAula>
            Agendar aula
          </AgendarAula>
        </Right>
      </Header>
      <ContainerContent />
      <ContainerContent />
      <ContainerContent />
    </Container>
  );
};

export { ProfileTeacher };
