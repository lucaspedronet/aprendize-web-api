/* eslint-disable object-curly-newline */
import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';
import { HiShare } from 'react-icons/hi';
import { Container, Header, Avatar, Content, ContainerTop, NameText, Evaluation } from './styles';

import avatarProfile from '../../assets/Avatar-03.svg';

const ProfileTeacher: React.FC = () => {
  console.log('ok');
  return (
    <Container>
      <Header>
        <Avatar src={avatarProfile} />
        <Content>
          <ContainerTop>
            <NameText>Lucas Pedro Lopes</NameText>
            <BsFillHeartFill size={20} color="#F78057" />
            <HiShare size={20} />
          </ContainerTop>
          <Evaluation>
            <strong>Embaixador Aprendize</strong>
          </Evaluation>
        </Content>
      </Header>
    </Container>
  );
};

export { ProfileTeacher };
