import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.layout.navbar.background};
  color: ${(props) => props.theme.layout.navbar.color};

  button:focus {
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme.layout.navbar.color};
  }

  height: 50px;

  // Sombra
  -webkit-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  -moz-box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
  box-shadow: 0px 3px 10px ${(props) => props.theme.layout.navbar.shadowColor};
`;

export const Tools = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ToolsDestaque = styled.div`
  display: flex;
  align-items: center;
  margin-left: -15px;
  padding-right: 0.2rem;
  height: 50px;

  @media screen and (min-width: 750px) {
    background-color: ${(props) => props.theme.layout.navbar.backgroundTools};
    padding-right: 0.5rem;
    margin-left: 0.3rem;
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.layout.body.backgroundLogo};
  width: 80px;
  height: 100%;
  margin-right: 0.3rem;
  padding: 0 0.7rem;

  @media screen and (min-width: 750px) {
    width: 196px;
    padding: 0 2rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
`;

export const Logout = styled.div`
  border-left: 1px solid #f2f2f2;

  @media screen and (min-width: 750px) {
    border-left: 1px solid #70707050;
  }
`;
