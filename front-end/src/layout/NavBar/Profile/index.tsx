/* eslint-disable object-curly-newline */
import React, { useMemo, useState } from 'react';
import { FaAngleDown, FaCamera, FaCog, FaSignOutAlt, FaUserAlt } from 'react-icons/fa';
import { useSpring } from 'react-spring';
import { Avatar, Container, Perfil, Tools, User, Saudacao, UserCode, UserName } from './styles';
import AvatarImg from '../../../assets/Avatar.png';

export const Profile: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false);
  const props = useSpring({ opacity: showProfile ? 1 : 0 });
  const user = {
    avatar: AvatarImg,
    nome: 'Lucas Pedro Lopes',
    codigo: '12912u 412h4',
  };

  const firstName = useMemo(() => {
    const split = user.nome.split(' ') ?? [''];
    return split[0];
  }, [user.nome]);

  const AvatarName = useMemo(() => {
    const names = user.nome.split(' ') ?? ['', ''];
    const first = names[0].split('')[0];
    const last = names[names.length - 1].split('')[0];

    return first.toUpperCase() + last.toUpperCase();
  }, [user.nome]);

  return (
    <>
      <User>
        <Saudacao>
          Olá,
          <span>{firstName}</span>
        </Saudacao>
        <button className="btn btn-outline" type="button" onClick={() => setShowProfile(!showProfile)}>
          <FaUserAlt />
          <FaAngleDown />
        </button>
      </User>
      {showProfile && (
        <Container style={props}>
          <Perfil>
            <Avatar>
              {user.avatar ? <img src={user.avatar} alt="" /> : AvatarName}

              <button type="button" className="btn btn-outline">
                <FaCamera />
              </button>
            </Avatar>
            <UserCode>{user.codigo}</UserCode>
            <UserName>{user.nome}</UserName>
          </Perfil>
          <Tools>
            <button type="button" onClick={() => setShowProfile(false)}>
              <FaUserAlt /> Perfil
            </button>
            <button type="button" onClick={() => setShowProfile(false)}>
              <FaCog /> Configurações
            </button>
            <button type="button" title="Sair do sistema" onClick={() => console.log('signOut')}>
              <FaSignOutAlt /> Logout
            </button>
          </Tools>
        </Container>
      )}
    </>
  );
};
