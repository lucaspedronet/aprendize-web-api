/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import React, { useCallback, useEffect, useState } from 'react';
import { ImLocation, ImStarFull } from 'react-icons/im';
import { BsFillHeartFill } from 'react-icons/bs';
import { PageContent } from '../../layout/PageContent';

import { api } from '../../services/api';
import { formatMoney } from '../../utils/formatMoney';

import avatarImg from '../../assets/AvatarTeacher.svg';
import avatarImg2 from '../../assets/Avatar-02.svg';
import avatarImg3 from '../../assets/Avatar-03.svg';
import avatarImg4 from '../../assets/Avatar-04.svg';

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
  Favorite,
} from './styles';

interface ITeacher {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  tags: string[];
  city: string;
  hour: number;
  evaluation: number;
  avatarImg: string;
  favorite: boolean;
}

const data: ITeacher[] = [
  {
    name: 'Julio Henrique',
    firstName: 'Julio',
    lastName: 'henrique',
    email: '',
    description:
      'Sou apaixonado pela educação e pela minhas profissão. Atualmente sou graduando pela USP e atuo como professor em Colégio particular, em cursinho preparatório para o vestibular e leciono aulas particulares há mais de 4 anos, tendo alunos aprovados em Medicina, Direito, Odontologia e em diversos outros cursos nas melhores universidades (USP, Unicamp e Unesp).',
    tags: ['Inglês', 'Softwares', 'Matemática', 'Física'],
    city: 'Porto Nacional - TO',
    hour: 40.5,
    evaluation: 4.5,
    avatarImg,
    favorite: false,
  },
  {
    name: 'Gustavo',
    firstName: '',
    lastName: '',
    email: '',
    description:
      'Sou graduado em Engenharia Química pela USP, Mestre em engenharia também USP e atualmente doutorando na mesma universidade.',
    tags: ['Geometria', 'Trigonometria', 'Aritmética', 'Álgebra'],
    city: 'Porto Nacional - TO',
    hour: 140.5,
    evaluation: 4.1,
    avatarImg: avatarImg2,
    favorite: false,
  },
  {
    name: 'Lucas',
    firstName: '',
    lastName: '',
    email: '',
    description:
      'Sou Lucas, dono do Stúdio 3D Castro, formado em Arquitetura e Urbanismo pela Universidade Federal de Alagoas tenho trabalhado na área de 3D há 8 anos;',
    tags: ['AutoCAD', 'SketchUp', 'Softwares', 'Animação 3D'],
    city: 'Porto Nacional - TO',
    hour: 60.5,
    evaluation: 4.8,
    avatarImg: avatarImg4,
    favorite: false,
  },
  {
    name: 'Beatriz Amorim Silva',
    firstName: '',
    lastName: '',
    email: '',
    description: 'Aulas online de conversação em inglês, com metodologias própria e resultados',
    tags: ['Inglês', 'Softwares', 'Matemática', 'Física'],
    city: 'Porto Nacional - TO',
    hour: 110.5,
    evaluation: 5,
    avatarImg: avatarImg3,
    favorite: false,
  },
  {
    name: 'Mónica Ferraz',
    firstName: '',
    lastName: '',
    email: '',
    description: 'Aulas online de conversação em inglês, com metodologias própria e resultados',
    tags: ['Inglês', 'Softwares', 'Matemática', 'Física'],
    city: 'Porto Nacional - TO',
    hour: 110.5,
    evaluation: 5,
    avatarImg: avatarImg3,
    favorite: false,
  },
];

const Dashboard: React.FC = () => {
  const [teacher, setTeacher] = useState<ITeacher[]>([]);
  const [searchTeacher, setSearchTeacher] = useState<string>('');
  // const [toggleFavorite, setToggleFavorite] = useState<boolean>(false);

  // function handlerSearchTeacher() {}
  const handlerFavorite = useCallback((id) => {
    setTeacher((params) => {
      const teacherFavorite = params.findIndex((p) => p.name === id);
      if (teacherFavorite !== -1) {
        const formatted = params[teacherFavorite];
        params[teacherFavorite].favorite = !formatted.favorite;

        return params;
      }
      return params;
    });
  }, []);

  useEffect(() => {
    setTeacher(data);
    async function loading(): Promise<void> {
      const query = `
        query TeacherList {
          teacherList {
            name
            firstName
            lastName
            email
            description
            tags
            city
            hour
            evaluation
            avatarImg
          }
        }
      `;
      await api
        .post('graphql', { query })
        .then((result) => {
          const response = result.data.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    loading();
  }, []);

  return (
    <PageContent title="Dashboard">
      <Container>
        <Form>
          <input
            type="text"
            placeholder="Qual conteúdo deseja aprender? Fluxo de caixa"
            value={searchTeacher}
            onChange={(e) => setSearchTeacher(e.target.value)}
          />
          <button type="button">Buscar</button>
        </Form>

        <ListTeacher>
          {teacher.map((p) => {
            console.log(p);
            return (
              <LinkCard key={p.name} to={`/profile-teacher/${p.name}`}>
                <CardContent>
                  <img src={p.avatarImg} alt="Avatar" />
                  <div>
                    <ContainerEvaluation>
                      <div>
                        <ImStarFull size={20} color="#FFBF00" />
                        <Evaluation>{p.evaluation}</Evaluation>
                      </div>
                      <Favorite type="button" onClick={() => handlerFavorite(p.name)}>
                        <BsFillHeartFill size={20} color={p.favorite ? '#F78057' : '#fff'} />
                      </Favorite>
                    </ContainerEvaluation>
                    <NameText>{p.name}</NameText>
                    <Hour>{`${formatMoney(p.hour)} /h`}</Hour>
                    <div>
                      <ImLocation />
                      <strong>{p.city}</strong>
                    </div>

                    <Description>{p.description}</Description>
                  </div>
                </CardContent>
              </LinkCard>
            );
          })}
        </ListTeacher>
      </Container>
    </PageContent>
  );
};

export { Dashboard };
