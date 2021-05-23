/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React from 'react';
import { ImLocation, ImStarFull } from 'react-icons/im';
import { BsFillHeartFill } from 'react-icons/bs';
import { PageContent } from '../../layout/PageContent';

import avatarImg from '../../assets/AvatarTeacher.svg';

import {
  Container,
  Form,
  ListTeacher,
  LinkCard,
  NameText,
  CardContent,
  ContainerEvaluation,
  Hour,
  Evaluation,
  Description,
} from './styles';

const Dashboard: React.FC = () => (
  <PageContent title="Dashboard">
    <Container>
      <Form>
        <input type="text" placeholder="Qual conteúdo deseja aprender? Fluxo de caixa" />
        <button type="button">Buscar</button>
      </Form>

      <ListTeacher>
        <LinkCard href="#">
          <CardContent>
            <img src={avatarImg} alt="Avatar" />
            <div>
              <ContainerEvaluation>
                <div>
                  <ImStarFull size={20} color="#FFBF00" />
                  <Evaluation>4.5</Evaluation>
                </div>
                <BsFillHeartFill size={20} color="#F78057" />
              </ContainerEvaluation>
              <NameText>Beatriz Amorim Silva</NameText>
              <Hour>R$ 40,00 /h</Hour>
              <div>
                <ImLocation />
                <strong>Porto Nacional - TO</strong>
              </div>

              <Description>Aulas online de conversação em inglês, com metodologias própria e resultados</Description>
            </div>
          </CardContent>
        </LinkCard>
        <LinkCard href="#">
          <CardContent>
            <img src={avatarImg} alt="Avatar" />
            <div>
              <ContainerEvaluation>
                <div>
                  <ImStarFull size={20} color="#FFBF00" />
                  <Evaluation>4.5</Evaluation>
                </div>
                <BsFillHeartFill size={20} color="#F78057" />
              </ContainerEvaluation>
              <NameText>Beatriz Amorim Silva</NameText>
              <Hour>R$ 40,00 /h</Hour>
              <div>
                <ImLocation />
                <strong>Porto Nacional - TO</strong>
              </div>

              <Description>Aulas online de conversação em inglês, com metodologias própria e resultados</Description>
            </div>
          </CardContent>
        </LinkCard>
        <LinkCard href="#">
          <CardContent>
            <img src={avatarImg} alt="Avatar" />
            <div>
              <ContainerEvaluation>
                <div>
                  <ImStarFull size={20} color="#FFBF00" />
                  <Evaluation>4.5</Evaluation>
                </div>
                <BsFillHeartFill size={20} color="#F78057" />
              </ContainerEvaluation>
              <NameText>Beatriz Amorim Silva</NameText>
              <Hour>R$ 40,00 /h</Hour>
              <div>
                <ImLocation />
                <strong>Porto Nacional - TO</strong>
              </div>

              <Description>Aulas online de conversação em inglês, com metodologias própria e resultados</Description>
            </div>
          </CardContent>
        </LinkCard>
      </ListTeacher>
    </Container>
  </PageContent>
);

export { Dashboard };
