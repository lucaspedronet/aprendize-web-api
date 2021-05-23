import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 67px;
  z-index: 1000;
  right: 32px;
  background-color: transparent !important;

  &::before {
    content: '';
    border-style: solid;
    border-color: ${(props) => props.theme.layout.navbar.profile.perfil.background} transparent;
    border-width: 0 12px 12px 12px;
    bottom: 20px;
    bottom: 100%;
    position: absolute;
    left: 77%;
    transform: translateX(-50%);

    @media screen and (min-width: 750px) {
      left: 74%;
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 5px;
  }
`;

export const UserCode = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 0.3rem;
  font-size: 0.75rem;
`;

export const UserName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.75rem;
`;

export const Saudacao = styled.div`
  display: none !important;

  @media screen and (min-width: 750px) {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    letter-spacing: NaNpx;
    font-size: 0.75rem;
    font-weight: 600;

    span {
      margin-top: -3px;
    }
  }
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.layout.navbar.profile.perfil.background} !important;
  color: ${(props) => props.theme.layout.navbar.profile.perfil.color};
  width: 150px;
  min-height: 98px !important;
  border-radius: 10px 10px 0 0;
  padding: 0.5rem 1rem !important;

  font-size: 0.75rem;

  // Sombra
  -webkit-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  -moz-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px !important;
  height: 40px !important;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.layout.navbar.profile.perfil.color} !important;
  background-color: ${(props) => props.theme.layout.navbar.profile.perfil.background} !important;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-left: 1px;
  }

  // Sombra
  -webkit-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  -moz-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};

  button {
    position: absolute;
    right: 30%;
    top: 27px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.layout.navbar.profile.perfil.color};
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.layout.navbar.profile.perfil.background};

    svg {
      width: 12px;
    }
  }
`;

export const Tools = styled.div`
  display: inline !important;
  width: 150px;
  min-height: 135px !important;
  background-color: ${(props) => props.theme.layout.navbar.profile.tools.background} !important;
  color: ${(props) => props.theme.layout.navbar.profile.tools.color};
  border-radius: 0 0 10px 10px;
  padding: 0.5rem 1rem !important;

  // Sombra
  -webkit-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  -moz-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};

  button {
    display: flex;
    align-items: center;
    border: 0;
    width: 100%;
    background-color: transparent;
    font-size: 0.875rem;
    padding: 10px 0;
    color: ${(props) => props.theme.layout.navbar.profile.tools.color};

    svg {
      color: ${(props) => props.theme.layout.navbar.profile.tools.color};
      margin-right: 0.5rem;
    }

    :hover {
      filter: brightness(0.75);
    }
  }

  button + button {
    border-top: 1px solid #bebebe;
  }
`;
